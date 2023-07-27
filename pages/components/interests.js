export default function Interests({stargaze}) {
    return (
        <div class={stargaze ? "fadeout2" : "fadein2"}>
            <div class="text-xl font-bold">
                <span class="highlight">
                    interests
                </span>
            </div>
            <div class="flex flex-col md:flex-row mb-2.5 overflowxscroll">
                <div class="basis-1/2">
                    <ul>
                        <li class="mb-1">
                            <span class="highlight">
                                agi/ml <br></br>[
                                <a href='https://www.coherentapp.tech/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                coherent
                                </a>
                                /
                                <a href='https://github.com/LeonDong02/pennappsxx' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                $machine
                                </a>
                                /
                                <a href='https://uwflow.com/course/cs486' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                cs486
                                </a>
                                /
                                <a href='https://uwflow.com/course/cs484' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                cs484
                                </a>
                                ]
                            </span>
                        </li>
                        <li class="mb-1">
                            <span class="highlight">
                                security/cryptography <br></br>[
                                <a href='https://github.com/LeonDong02/issessions-2023' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                issessions
                                </a>
                                /
                                <a href='https://picoctf.org/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                picoctf
                                </a>
                                /
                                <a href='https://uwflow.com/course/co487' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                co487
                                </a>
                                /
                                <a href='https://uwflow.com/course/cs458' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                cs458
                                </a>
                                ]
                            </span>
                        </li>
                        <li class="mb-1">
                            <span class="highlight">
                                web3 <br></br>[
                                <a href='https://github.com/LeonDong02/habipets' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                habipets
                                </a>
                                /
                                <a href='https://twitter.com/uw_blockchain' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                uwblockchain
                                </a>
                                ]
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="basis-1/2">
                    <ul>
                        <li class="mb-1">
                            <span class="highlight">
                                bioinformatics <br></br>[
                                <a href='https://uwflow.com/course/cs482' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                cs482
                                </a>
                                ]
                            </span>
                        </li>
                        <li class="mb-1">
                            <span class="highlight">
                                quantum computing <br></br>[
                                <a href='https://uwflow.com/course/co481' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                co481
                                </a>
                                ]
                            </span>
                        </li>
                        <li class="mb-1">
                            <span class="highlight">
                                others <br></br>[
                                <span class="text-violet-600">
                                uiux
                                </span>
                                /
                                <span class="text-violet-600">
                                gamedev
                                </span>
                                /
                                <span class="text-violet-600">
                                hft
                                </span>
                                ]
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
