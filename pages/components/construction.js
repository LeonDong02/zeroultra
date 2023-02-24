export default function Construction({stargaze}) {
    return (
        <div class={stargaze ? "fadeout6 construction-border" : "fadein6 construction-border"}>
            <br class="seperator"></br>
            <div class="center"><span class="highlight">under construction</span></div>
            <br class="seperator"></br>
            <div class="center">
                <span class="highlight">
                    <a href="https://d3l-n3st.vercel.app/prev" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">&lt;&lt;</a>
                    &nbsp;
                    <a href="https://d3l-n3st.vercel.app/" target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">d3l✧n3st</a>
                    &nbsp;
                    <a href="https://d3l-n3st.vercel.app/next" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">&gt;&gt;</a>
                </span>
            </div>
            <br class="seperator"></br>
            <div class="center">
                <span class="highlight">
                    <a href='https://zeroultra.neocities.org/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">
                        right-brain website
                    </a>
                </span>
            </div>
            <br class="seperator"></br>
        </div>
    )
}
