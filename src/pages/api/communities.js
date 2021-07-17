import { SiteClient } from 'datocms-client';

export default async function getRequest(req, res) {
    // if (req.method === 'POST') {
    const client = new SiteClient('9d07ede911a02a43cf272b1962f89c');

    console.log(client.items)
    const record = await client.items.create({
        itemType: '972880',
        title: 'Disney',
        imageUrl: 'https://github.com/gabriel-nt.png',
    });

    // return response.json({
    //     data: record,
    // });
    // }

    // res.status(404).json({
    //     message: 'Sem retorno para esse tipo de Requisição!'
    // });
}