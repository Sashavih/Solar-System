export interface DATA {
    name?: string | boolean

}
export async function getData(): Promise<DATA[]> {
    const res = await fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    const data = await res.json()
    return data as DATA[]
}

export const getDataChart = async () => {
    const URL = 'https://api.le-systeme-solaire.net/rest/bodies/'; //ссылка на api
    const response = await fetch(URL);
    const data = await response.json();
    return data.bodies.slice(0, 9);
}