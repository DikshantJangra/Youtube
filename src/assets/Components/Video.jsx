import React from "react";
function Youtube(){

    const data = [
        {poster:"https://i.ytimg.com/vi/4qyBjxPlEZo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAD_4bRQlmTkRG6JV4M4hJgDH7k0A",
            link:"https://youtu.be/4qyBjxPlEZo?si=2EV3HGpyZnzYJ98p",
            description:"Buld a Uber Clone App with MERN stack | Complete 11 hour masterclass",
            channelName:"Sheriyans School of Coding",
            views:"28k",
            releasedOn:"18 hrs ago"
        }
    ]

    const optn = [
        {icon:"ri-home-line", iconName:"Home", active:true},
        {icon:"ri-film-line", iconName:"Shorts", active:false},
        {icon:"ri-fire-line", iconName:"Trending", active:false},
    ]

    const you = [
        {icon:"ri-history-fill", iconName:"History", active:false},
        {icon:"ri-list-unordered", iconName:"Playlist", active:false},
        {icon:"ri-video-chat-line", iconName:"Your Videos", active:false},
        {icon:"ri-time-fill", iconName:"Watch Later", active:false},
        {icon:"ri-heart-line", iconName:"Liked Videos", active:false},
    ]

    const sub = [
        {img:"https://yt3.ggpht.com/6cCBWU4mCQKRUAxuT78Lw8Qzn2KCLoe80P7Vu3ppSQeWqc_J8T9r5dFMHZaM7xAlEhWQkLke1h0=s88-c-k-c0x00ffffff-no-rj", channelName:"Artificially Aware"},
        {img:"https://yt3.ggpht.com/ytc/AIdro_kLOvoCDsmlUy1HOCk5kQASKch1NDCNqDx3KNR_cV9m3F4=s88-c-k-c0x00ffffff-no-rj", channelName:"After Skool"},
        {img:"https://yt3.ggpht.com/m_e5-z-5EPsn5-qRZkx9amJhVdZk_jJxwDY_GeQbO0HDoJZF7TCtdZZEWWFFYT3nFFE7paNT=s88-c-k-c0x00ffffff-no-rj", channelName:"Aeey TV"},
        {img:"https://yt3.ggpht.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s88-c-k-c0x00ffffff-no-rj", channelName:"Andrew Huberman"},
        {img:"https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s88-c-k-c0x00ffffff-no-rj", channelName:"Apna College"},
        {img:"https://yt3.ggpht.com/ddhEVH-j4fe3LuDZqqdpVegRNGoVGwfOT1J5GO7O800KW7DczG7mGjfg8rnQGorVuVknbFgw=s88-c-k-c0x00ffffff-no-rj", channelName:"Better Human"},
        {img:"https://yt3.ggpht.com/ytc/AIdro_kNzBhztgwPy3i0rF0P7jTRjKtqcIdSZaHgr8lpvUae_g=s88-c-k-c0x00ffffff-no-rj", channelName:"Better Ideas"},
        {img:"https://yt3.ggpht.com/nttITw8gOtWPeQZNHsYys_WGVdOKDFP-E65g7Bk_dilGVC_dqU_VzIxxMzGep-z4DwnEEYzd=s88-c-k-c0x00ffffff-no-rj", channelName:"Beyond Coding"},
        {img:"https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s88-c-k-c0x00ffffff-no-rj", channelName:"Carry Minati"},
        {img:"https://yt3.ggpht.com/ytc/AIdro_kr4Xv6GpEaeOVO9n6gQ29NDGs4YuW2HJkGOSqaZ1IAoA=s88-c-k-c0x00ffffff-no-rj", channelName:"Chetan Bhagat"},
        {img:"https://yt3.ggpht.com/ZK_pEsEvT0W89rDVe_Hl5-yxNheniWVT8ZSPsxUShnlL61YNzH11uQP_fZ8vnG1LoNTCuPsC1A=s88-c-k-c0x00ffffff-no-rj", channelName:"Cine Desi"},
        {img:"https://yt3.ggpht.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s88-c-k-c0x00ffffff-no-rj", channelName:"Code With Harry"},
        {img:"", channelName:""},
    ]

    const vid = [
        {
            href:"https://youtu.be/ytrtFsXRXGY?si=6o1fPM-BGgLILuG2",
            img:"https://i.ytimg.com/vi/h4EfauCnOrw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBDfSSMb4fAy7ofWZP-JJPBmxlHiw",
            title:"Daily Life in North Korea | How People live under Dictatorship? | Dhruv Rathee",
            cOwner:"Dhruv Rathee",
            views:"9.3M views",
            release:"2 days ago"
        },
        {
            href:"https://youtu.be/h4EfauCnOrw?si=jLdevRuFOcdby3y4",
            img:"https://i.ytimg.com/vi/ytrtFsXRXGY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD-wcaN5w1kfXw6vy2pVEAm2qLY2A",
            cOwner:"Kai Trump",
            title:"Daily Life in North Korea | How People live under Dictatorship? | Dhruv Rathee",
            views:"2.7M views",
            release:"1 days ago"
        },
        {
            href:"https://youtu.be/oWydYSYJXJA?si=IXMabLjsqEjkMBQp",
            img:"https://i.ytimg.com/vi/oWydYSYJXJA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFw4kWLDBkFTJKO3aMcYs_UMlhGQ",
            cOwner:"Jalex Rossa",
            title:"I Spent 892 Days Creating A Naruto Trailer - Part 5",
            views:"655k views",
            release:"4 days ago"
        },
        {
            href:"https://youtu.be/fQNjD1asFJI?si=ynKdmxUMFkNFvNb7",
            img:"https://i.ytimg.com/vi/fQNjD1asFJI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAwAf56OcwbzRM1WGAr6dI8B06jgw",
            cOwner:"Augmentables",
            title:"Mahabharat : An Eternal War Trailer | AI Series | Augmentables x EiPi Media",
            views:"185k views",
            release:"7 days ago"
        },

        {
            href:"https://youtu.be/oWydYSYJXJA?si=IXMabLjsqEjkMBQp",
            img:"https://i.ytimg.com/vi/oWydYSYJXJA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFw4kWLDBkFTJKO3aMcYs_UMlhGQ",
            cOwner:"Jalex Rossa",
            title:"I Spent 892 Days Creating A Naruto Trailer - Part 5",
            views:"655k views",
            release:"4 days ago"
        },

        {
            href:"https://youtu.be/oWydYSYJXJA?si=IXMabLjsqEjkMBQp",
            img:"https://i.ytimg.com/vi/oWydYSYJXJA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFw4kWLDBkFTJKO3aMcYs_UMlhGQ",
            cOwner:"Jalex Rossa",
            title:"I Spent 892 Days Creating A Naruto Trailer - Part 5",
            views:"655k views",
            release:"4 days ago"
        },

        {
            href:"https://youtu.be/oWydYSYJXJA?si=IXMabLjsqEjkMBQp",
            img:"https://i.ytimg.com/vi/oWydYSYJXJA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBFw4kWLDBkFTJKO3aMcYs_UMlhGQ",
            cOwner:"Jalex Rossa",
            title:"I Spent 892 Days Creating A Naruto Trailer - Part 5",
            views:"655k views",
            release:"4 days ago"
        },

        {
            href:"https://youtu.be/oWydYSYJXJA?si=IXMabLjsqEjkMBQp",
            img:"https://i.ytimg.com/vi/SnCX19_EWDQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCCiV80zcSvB9VdrMXtP9GWoXT78g",
            cOwner:"Jalex Rossa",
            title:"This time, don't leave me again#anime #naruto #sasuke #itachi",
            views:"655k views",
            release:"4 days ago"
        },

        {
            href:"https://youtu.be/fg8lCbXgP4U?si=Fo2QS4avIbhxmDQe",
            img:"	https://i.ytimg.com/vi/fg8lCbXgP4U/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCl6aFEh4LpEBk921ep9o2SI4OQ5Q",
            cOwner:"Netflix India",
            title:"Squid Game Season 2: Official Trailer",
            views:"5.9M views",
            release:" 4 days ago"
        },
    ]


    
    return(
        <>

        <div className="body">
            <div className="nav">
                <div className="yt">
                <i class="ri-menu-line"></i>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968852.png" alt="Image error! Report to the owner" />
                <span>YouTube</span>
                </div>

                <div className="input">
                    <i class="ri-search-2-line"></i>
                    <input type="text" placeholder="Search on youtube.."/>
                    <i class="ri-mic-ai-line"></i>
                </div>

                <div className="user">

                    <i className="ri-notification-line"></i>
                    <i className="ri-video-add-line"></i>
                    <i className="ri-user-line user"></i>
                </div>
            </div>

            
            <div className="options">
                {optn.map((elem,index)=>(
                            // <div key={index} className="navigate ${elem.active ? 'active' : ''}">
                            <div className={`navigate ${elem.active ? 'active' : ''}`} key={index}>
                                <i className={elem.icon}></i>
                                <span>{elem.iconName}</span>
                            </div>
                        ))}
                <div className="border"></div>
                    <div className="you">
                        <p>You -</p>
                        {you.map((elem,index)=>(
                            <div key={index} className="navigate">
                                <i className={elem.icon}></i>
                                <span>{elem.iconName}</span>
                            </div>
                        ))}
                    </div>
                <div className="border"></div>
                <div className="subscriptions">
                        <p>Subscriptions -</p>
                        {sub.map((elem,index)=>(
                            <div key={index} className="sub">
                                <img src={elem.img} alt="Image error! Report to the owner" />
                                <p>{elem.channelName}</p>
                            </div>
                        ))}
                    </div>


                
            </div>
            





            <div className="videos">
                {vid.map((elem,index)=>(
                    <div className="video">
                        <a href={elem.href}>
                            <img src={elem.img} alt="Video error! Report to the owner!" />
                        </a>
                        <div className="vInfo">
                            <h5>{elem.title}</h5>
                            <p>{elem.cOwner}</p>
                            <span>{elem.views}</span>
                            <span> {elem.release}</span>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        {/* Wrote using Tailwind! Not so good in tailwind so rewriting in .css file */}
        {/* <div className="h-screen w-full p-3 font-Roboto bg-black text-white">
            <div className="p-2 flex items-center justify-between">
                <div className="flex items-center">
                <i class="ri-menu-line text-3xl p-1"></i>
                <img className="h-16 pr-3" src="https://cdn-icons-png.flaticon.com/512/5968/5968852.png" alt="" />
                <h1 className="text-3xl font-bold">YouTube</h1>
                </div>
                <div>
                    <input className="text-black w-[40vh] h-9 rounded" type="text" placeholder="Search" />
                </div>
                <div className="text-3xl">
                    <i className="ri-notification-line p-2"></i>
                    <i className="ri-video-add-line p-2"></i>
                    <i className="ri-user-line user p-2"></i>
                </div>
            </div>

            <div className="p-8">
                <div className="i text-2xl p-3">
                <i className="ri-home-line"></i>
                <a href="#">Home</a><br />
                </div>

                <div className="i text-2xl p-3">
                <i className="ri-movie-ai-line"></i>
                <a href="#">Shorts</a><br />
                </div>

                <div className="i text-2xl p-3">
                <i className="ri-fire-line pl-0"></i>
                <a href="#">Trending</a><br />
                </div>
            </div> */}

            {/* {data.map((elem,index)=>(
                <div key={index}>
                    <video className="h-44 rounded" poster={elem.poster}>
                        <source src={elem.link} />
                    </video>
                    <p>{elem.description}</p>
                </div>
            ))} */}
        {/* </div> */}
        </>
    )
}

export default Youtube