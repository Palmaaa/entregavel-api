const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const products = [
    {
        id: '0',
        nome: 'Índia',
        intensidade: '11',
        preco: '29.0',
        descricao: 'Café com rebusta de monções',
        foto: 'https://www.nespresso.com/ecom/medias/sys_master/public/10840367792158/C-0359-India-2000x2000.png'
    },
    {
        id: '1',
        nome: 'Indonésia',
        intensidade: '11',
        preco: '29.0',
        descricao: 'Café com arábica no método de descascamento úmido',
        foto: 'https://www.nespresso.com/ecom/medias/sys_master/public/10820727865374/C-0360-Indonesia-2000x2000.png'
    },
    {
        id: '2',
        nome: 'Colômbia',
        intensidade: '6',
        preco: '29.0',
        descricao: 'Café com arábica de colheita tardia',
        foto: 'https://www.nespresso.com/ecom/medias/sys_master/public/10842190675998.png'
    },
    {
        id: '3',
        nome: 'Nicarágua',
        intensidade: '5',
        preco: '29.0',
        descricao: 'Café com arábica \"Black honey"',
        foto: 'https://www.nespresso.com/ecom/medias/sys_master/public/10838071672862/C-0362-nicaragua-2000x2000.png'
    },
    {
        id: '4',
        nome: 'Etiópia',
        intensidade: '4',
        preco: '29.0',
        descricao: 'Café com arábica de secagem natural',
        foto: 'https://www.nespresso.com/ecom/medias/sys_master/public/10831332802590/C-0363-Ethiopia-2000x2000.png'
    },
    {
        id: '5',
        nome: 'Napoli',
        intensidade: '13',
        preco: '25.0',
        descricao: 'Café excepcionalmente torrado e cremoso',
        foto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12807335641118/Desktop-Standard-2000x2000.png'
    }
]

// methods
app.get('/produtos', (req, res) => {
    return res.status(200).json([
        products[0],
        products[1],
        products[2],
        products[3],
        products[4],
        products[5],
    ]);
});

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id <= 5) {
        return res.status(200).json(products[id]);
    } else {
        return res.status(404).json({
            error: 'Produto não encontrado',
        });
    }
})

app.listen(3333, () => {
  console.log('Back-end started!');
});