import { cookies, headers } from "next/headers"

async function getOneTwoThree() {
    const one = (await cookies()).getAll().filter((item) => ['AAAA', 'BBBB'].includes(item.name))
    const two = (await cookies())
                .toString()
                .split(';')
                .map((item) => ({
                    name: item.trim().split('=')[0],
                    value: item.trim().split('=')[1],
                }))
                .filter((item) => ['AAAA', 'BBBB'].includes(item.name))
    const three = (await headers())
                .get('cookie')
                ?.split(';')
                .map((item) => ({
                    name: item.trim().split('=')[0],
                    value: item.trim().split('=')[1],
                }))
                .filter((item) => ['AAAA', 'BBBB'].includes(item.name))
                
    console.log([...(await headers()).entries()])
    console.log(one)
    console.log(two)
    console.log(three)

    return {one,two,three}
}

export default async function Page() {
    const {one,two,three} = await getOneTwoThree()

    return <>
        <>{JSON.stringify(one, undefined, ' ')}</>
        <br/>
        <>{JSON.stringify(two, undefined, ' ')}</>
        <br/>
        <>{JSON.stringify(three, undefined, ' ')}</>
    </>
}