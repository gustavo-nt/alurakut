import { SiteClient } from 'datocms-client';

export default async function getRequest(req, res) {
    if (req.method === 'POST') {
        const client = new SiteClient('c0dbb3dacbc5cc5fbbfc6b3ee0f620');

        const record = await client.items.create({
            itemType: '972891',
            ...req.body
        });

        return res.json({
            data: record
        });
    }

    res.status(404).json({
        message: 'Sem retorno para esse tipo de Requisição!'
    });
}