import puppeteer from 'puppeteer';

interface linkOjb {
    href: string;
    text: string;
}
// 获取微博热搜榜数据

const weiboHotSearch = (): void => {
    (async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 250,
        });
        const page = await browser.newPage();
        await page.goto('https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6', {
            waitUntil: 'networkidle2',
        });
        const dom = await page.$eval('#pl_top_realtimehot tbody', (e: Element) => {
            const arr: linkOjb[] = [];
            const tbody: Element[] = Array.from(e.children);
            tbody.map((i: Element) => {
                const item = i.querySelector('.td-02 a');
                if (item) {
                    arr.push({
                        text: item.innerHTML,
                        href: `https://s.weibo.com${item.getAttribute('href')}`,
                    });
                }
                return i;
            });
            return arr;
        });
        console.log(dom);
        browser.close();
    })();
};

export default weiboHotSearch;
