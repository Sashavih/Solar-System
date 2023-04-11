export interface DATA {
    name?: string

}
export async function getData(): Promise<DATA[]> {
    const res = await fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    const data = await res.json()
    return data as DATA[]
}
