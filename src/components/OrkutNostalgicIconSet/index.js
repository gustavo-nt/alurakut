import { List } from './styles';

export default function OrkutNostalgicIconSet(props) {
    const options = [
        { name: 'Recados', slug: 'recados', icon: 'book' },
        { name: 'Fotos', slug: 'fotos', icon: 'camera' },
        { name: 'Videos', slug: 'videos', icon: 'video-camera' },
        { name: 'Fãs', slug: 'fas', icon: 'star' },
        { name: 'Mensagens', slug: 'mensagens', icon: 'email' }
    ]

    const share = [
        { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
        { name: 'Legal', slug: 'legal', icon: 'cool' },
        { name: 'Sexy', slug: 'sexy', icon: 'heart' }
    ]

    return (
        <List>
            {options.map(({ name, slug, icon }) => (
                <li key={`orkut__icon_set__${slug}`}>
                    <span style={{ gridArea: 'title' }} className="OrkutNostalgicIconSet__title">
                        {name}
                    </span>
                    <span className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
                        <img key={`orkut__icon_set__${slug}_img`} className="OrkutNostalgicIconSet__iconSample" src={`https://alurakut.vercel.app/icons/${icon}.svg`} />
                        {props[slug] ? props[slug] : 0}
                    </span>
                </li>
            ))}
            {share.map(({ name, slug, icon }) => {
                const total = props[slug] ? props[slug] : 2;
                return (
                    <li key={`orkut__icon_set__${slug}`}>
                        <span className="OrkutNostalgicIconSet__title">
                            {name}
                        </span>
                        <span className="OrkutNostalgicIconSet__iconComplex" className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
                            {[0, 1, 2].map((_, index) => {
                                const isHeartActive = index <= (total - 1);
                                return <img key={`orkut__icon_set__${slug}_img_${index}`} src={`https://alurakut.vercel.app/icons/${icon}.svg`} style={{ marginRight: '2px', opacity: isHeartActive ? 1 : '0.5' }} />
                            })}
                        </span>
                    </li>
                );
            })}
        </List>
    )
}
