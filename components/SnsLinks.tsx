import {FC} from 'react';
import {SnsLink} from "../types/SnsLink"

const SnsLink: FC = () => {
    const snsLinks: Array<SnsLink> = [
        {url: "https://twitter.com/Ixy", label: "Twitter"},
        {url: "https://www.instagram.com/ixy__194/?hl=ja", label: "Instagram"},
        {url: "https://www.youtube.com/@ixy", label: "YouTube"},
        {url: "https://ixy.fanbox.cc/", label: "fanbox"},
        {url: "https://ci-en.dlsite.com/creator/5868", label: "Ci-en"},
    ]
    return (
        <div className="fixed bottom-0 left-0 w-full h-20 bg-slate-200 z-10 dark:bg-zinc-800">
            <div className="flex justify-center items-center h-full">
                {snsLinks.map((snslink) => <a key={snslink.url} href={snslink.url} target="_blank"
                                              rel="noopener noreferrer" className="dark:text-gray-100 px-2 py-1 rounded-md duration-100 ease-out hover:bg-gray-300 dark:hover:bg-zinc-700 active:scale-95">{snslink.label}</a>)}
            </div>
        </div>
    );
};

export default SnsLink
