const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, '../data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

function getTaiXiu(sum) {
    return sum >= 11 ? 'Tài' : 'Xỉu';
}

const sumModule = require('./routes/sum');
const sicbo789Module = require('./routes/sicbo789');
const sicbob52Module = require('./routes/sicbob52');
const sicbohitModule = require('./routes/sicbohit');
const luck8Module = require('./routes/luck8');
const betvipModule = require('./routes/betvip');

const game789Module = require('./routes/789');
const hitModule = require('./routes/hit');
const sunModule = require('./routes/sun');
const b52Module = require('./routes/b52');
const lc79Module = require('./routes/lc79');

app.use('/sum', sumModule);
app.use('/luck8', luck8Module);
app.use('/betvip', betvipModule);

app.use('/789', game789Module);
app.use('/789/sicbo', sicbo789Module);

app.use('/hit', hitModule);
app.use('/hit/sicbo', sicbohitModule);

app.use('/sun', sunModule);

app.use('/b52', b52Module);
app.use('/b52/sicbo', sicbob52Module);

app.use('/lc97', lc79Module);

app.get('/', (req, res) => {
    res.json({
        message: 'API Server - All in One',
        endpoints: [
            { path: '/789/taixiu', description: 'API 789 - Dự đoán Tài Xỉu' },
            { path: '/789/sicbo', description: 'API 789 - Sicbo' },
            { path: '/hit/hu', description: 'API Hit - Tài Xỉu Hũ' },
            { path: '/hit/md5', description: 'API Hit - Tài Xỉu MD5' },
            { path: '/hit/sicbo', description: 'API Hit - Sicbo' },
            { path: '/sun/taixiu', description: 'API Sun - Dự đoán Tài Xỉu' },
            { path: '/b52/taixiu', description: 'API B52 - Dự đoán Tài Xỉu' },
            { path: '/b52/sicbo', description: 'API B52 - Sicbo' },
            { path: '/lc97/hu', description: 'API LC97 - Tài Xỉu Hũ' },
            { path: '/lc97/taixiu', description: 'API LC97 - Tài Xỉu' },
            { path: '/sum', description: 'API Sum - Dự đoán Tài Xỉu Sum' },
            { path: '/luck8', description: 'API Luck8' },
            { path: '/betvip', description: 'API Betvip' }
        ]
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server đang chạy tại http://0.0.0.0:${PORT}`);
    console.log('');
    console.log('Endpoints:');
    console.log('  /789/taixiu - 789 Tài Xỉu');
    console.log('  /789/sicbo - 789 Sicbo');
    console.log('  /hit/hu - Hit Tài Xỉu Hũ');
    console.log('  /hit/md5 - Hit Tài Xỉu MD5');
    console.log('  /hit/sicbo - Hit Sicbo');
    console.log('  /sun/taixiu - Sun Tài Xỉu');
    console.log('  /b52/taixiu - B52 Tài Xỉu');
    console.log('  /b52/sicbo - B52 Sicbo');
    console.log('  /lc97/hu - LC97 Tài Xỉu Hũ');
    console.log('  /lc97/taixiu - LC97 Tài Xỉu');
});
