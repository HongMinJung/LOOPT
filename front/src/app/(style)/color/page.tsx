export default function ColorsPage() {
    const colorGroups = [
        {
            title: '기본 색상',
            colors: [
                { name: '브랜드900', class: 'bg-blue-900'},
                { name: '브랜드800', class: 'bg-blue-800'},
                { name: '브랜드700', class: 'bg-blue-700'},
                { name: '브랜드600', class: 'bg-blue-600'},
                { name: '브랜드500', class: 'bg-blue-500'},
                { name: '브랜드400', class: 'bg-blue-400'},
                { name: '브랜드300', class: 'bg-blue-300'},
                { name: '브랜드200', class: 'bg-blue-200'},
                { name: '브랜드100', class: 'bg-blue-100'}
            ]
        },
        {
            title: '그레이스케일',
            colors: [
                { name: '블랙', class: 'bg-black'},
                { name: '그레이900', class: 'bg-gray-900'},
                { name: '그레이800', class: 'bg-gray-800'},
                { name: '그레이700', class: 'bg-gray-700'},
                { name: '그레이600', class: 'bg-gray-600'},
                { name: '그레이500', class: 'bg-gray-500'},
                { name: '그레이400', class: 'bg-gray-400'},
                { name: '그레이300', class: 'bg-gray-300'},
                { name: '그레이200', class: 'bg-gray-200'},
                { name: '그레이100', class: 'bg-gray-100'},
                { name: '화이트', class: 'bg-white'},
            ]
        },
        {
            title: '상태 색상',
            colors: [
                { name: '성공', class: 'bg-green-600'},
                { name: '경고', class: 'bg-yellow-500'},
                { name: '오류', class: 'bg-red-500'}
            ]
        }
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">컬러</h1>

            {colorGroups.map(group => (
                <section key={group.title} className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {group.colors.map(color => (
                            <div key={color.name} className="border rounded-md overflow-hidden">
                                <div className={`h-24 ${color.class}`}></div>
                                <div className="p-3">
                                    <h3 className="font-medium">{color.name}</h3>
                                    <p className="text-xs text-gray-400 mt-1">{color.class}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
