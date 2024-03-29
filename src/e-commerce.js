import './e-commerce.css';
import watch1 from './image/watch1.jpg'
import mac from './image/Rectangle 5.jpg'
import two from './image/2nd.jpg'
import three from './image/3.jpg'
import four from './image/4.jpg'
import five from './image/5.jpg'
import six from './image/6.jpg'
import seven from './image/7.jpg'
import eight from './image/8.jpg'
import nine from './image/9.jpg'
import ten from './image/10.jpg'
import el from './image/11.jpg'
import tw from './image/12.jpg'
import th from './image/13.jpg'
import fo from './image/14.jpg'
import fif from './image/15.jpg'
import si from './image/16.jpg'
import sev from './image/17.jpg'
import ei from './image/18.jpg'
import nin from './image/19.jpg'
import twen from './image/20.jpg'
const Ecommerce = () => {
    return (
        < div className='ap'>
            {/* nav bar start */}

            <nav>
                <div className='nav' >
                    <div>
                        <span className='ecom'>E-commerce </span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <input className='search' type="text" placeholder='  search' />
                        <div className='iconback'>
                            <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect width="40" height="40" rx="10" fill="#13505B" />
                                <path d="M35 35L27.5233 27.51L35 35ZM31.6667 17.5C31.6667 21.2573 30.1741 24.8606 27.5173 27.5174C24.8606 30.1742 21.2572 31.6667 17.5 31.6667C13.7428 31.6667 10.1394 30.1742 7.48266 27.5174C4.82589 24.8606 3.33334 21.2573 3.33334 17.5C3.33334 13.7428 4.82589 10.1395 7.48266 7.48269C10.1394 4.82593 13.7428 3.33337 17.5 3.33337C21.2572 3.33337 24.8606 4.82593 27.5173 7.48269C30.1741 10.1395 31.6667 13.7428 31.6667 17.5V17.5Z" stroke="white" stroke-width="5" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='had'>
                        <div>
                            <a class="navigation" aria-current="page" href="">Home </a>
                        </div>
                        <div>
                            <a class="navigation " href="">Cart </a>
                        </div>
                        <div>
                            <a class=" navigation" href="">account </a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* nav bar ends */}


            {/* Banner start*/}
            <div style={{ display: 'flex' }}>
                <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                    <div className='cat'>
                        <div className='catdis ' >Categories</div>
                        <div><a className='catdis1' >Electronics</a></div>
                        <div><a className='catdis1' >Clothings</a></div>
                        <div><a className='catdis1' >Foot wear</a></div>
                        <div><a className='catdis1' >Bakery</a></div>
                    </div>
                </div>
                <div style={{ paddingBottom: "20px", paddingTop: "20px", paddingLeft: "20px", width: "100%" }}>
                    <div className='banner' >
                        <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
                        <h2>Pooja Gohil Personal website</h2>
                            <div className='bigsale'>BIG SALE 50%</div>
                            <span className='bd' >Watch</span>
                            <span className='bd' >New smart watch</span>
                            <div className='bigsale'>UGX 19,999</div>
                            <button className='addtocart' >Add to Cart</button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='img1' src={watch1} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner end*/}

            {/* products */}

            {/* Electronics */}
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className='el' id='electronic' >
                    <div className='el1' >Electronics</div>
                    <div className='el2' >See More >></div>
                </div>
                <div className='elp'>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <img className='mac' src={mac} alt="" />
                        </div>
                        <div>
                            <span className='mac1' >
                                Macbook Pro 2014
                            </span>
                        </div>
                        <div>
                            <div>
                                <b className='mac1' >235,000 ugx</b>
                            </div>
                            <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                                <a href='/cart' className='addtocart1'>Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <div>
                            <img className='mac' src={two} alt="" />
                        </div>
                        <div>
                            <span className='mac1' >
                                watch
                            </span>
                        </div>
                        <div >
                            <div>
                                <b className='mac1' >135,000 ugx</b>
                            </div>
                            <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                                <a href='/cart' className='addtocart1'>Add to Cart </a>
                            </div>
                        </div>


                    </div>
                    <div>
                        <img className='mac' src={three} alt="" /><br></br>
                        <span className='mac1' >
                            Samsung Galaxy<br></br>
                            <b className='mac1' >335,000 ugx</b><br></br>
                            <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                                <a href='/cart' className='addtocart1'>Add to Cart </a>
                            </div>
                        </span>
                    </div>
                    <div>
                        <img className='mac' src={four} alt="" /><br></br>
                        <span className='mac1' >
                            Electric Kettle<br></br>
                            <b className='mac1' >5,000 ugx</b><br></br>
                            <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                                <a href='/cart' className='addtocart1'>Add to Cart </a>
                            </div>
                        </span>
                    </div>
                    <div>
                        <img className='mac' src={five} alt="" /><br></br>
                        <span className='mac1' >
                            Headphones<br></br>
                            <b className='mac1' >15,000 ugx</b><br></br>
                            <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                                <a href='/cart' className='addtocart1'>Add to Cart </a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>


            {/* Clothings */}
            <div className='el'>
                <div className='el1' >Clothings</div>
                <div className='el2' >See More >></div>
            </div>
            <div className='elp'>
                <div>
                    <img className='mac' src={six} alt="" /><br></br>
                    <span className='mac1' >
                        Red Floral Dress<br></br>
                        <b className='mac1' >35,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>
                    </span>
                </div>
                <div>
                    <img className='mac' src={seven} alt="" /><br></br>
                    <span className='mac1' >
                        Jean Shorts<br></br>
                        <b className='mac1' >65,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                        <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>
                    </span>
                </div>
                <div>
                    <img className='mac' src={eight} alt="" /><br></br>
                    <span className='mac1' >
                        Pink Trousers women<br></br>
                        <b className='mac1' >35,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>
                    </span>
                </div>
                <div>
                    <img className='mac' src={nine} alt="" /><br></br>
                    <span className='mac1' >
                        Suit<br></br>
                        <b className='mac1' >225,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>
                    </span>
                </div>
                <div>
                    <img className='mac' src={ten} alt="" /><br></br>
                    <span className='mac1' >
                        T-Shirt<br></br>
                        <b className='mac1' >55,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div>
            </div>

            {/* Foot wear */}
            <div className='el'>
                <div className='el1' >Foot wear</div>
                <div className='el2' >See More >></div>
            </div>
            <div className='elp'>
                <div>
                    <img className='mac' src={el} alt="" /><br></br>
                    <span className='mac1' >
                        Leather Shoes<br></br>
                        <b className='mac1' >95,150 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div>
                <div>
                    <img className='mac' src={tw} alt="" /><br></br>
                    <span className='mac1' >
                        Women’s shoes<br></br>
                        <b className='mac1' >95,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div><div>
                    <img className='mac' src={th} alt="" /><br></br>
                    <span className='mac1' >
                        Sneakers<br></br>
                        <b className='mac1' >125,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div><div>
                    <img className='mac' src={fo} alt="" /><br></br>
                    <span className='mac1' >
                        Nick Shoes<br></br>
                        <b className='mac1' >35,050 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div><div>
                    <img className='mac' src={fif} alt="" /><br></br>
                    <span className='mac1' >
                        Shoes<br></br>
                        <b className='mac1' >35,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div>
            </div>

            {/* Bakery */}
            <div className='el'>
                <div className='el1' >Bakery</div>
                <div className='el2' >See More >></div>
            </div>
            <div className='elp'>
                <div>
                    <img className='mac' src={si} alt="" /><br></br>
                    <span className='mac1' >
                        Bread<br></br>
                        <b className='mac1' >5,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div>
                <div>
                    <img className='mac' src={sev} alt="" /><br></br>
                    <span className='mac1' >
                        Cakes<br></br>
                        <b className='mac1' >65,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div><div>
                    <img className='mac' src={ei} alt="" /><br></br>
                    <span className='mac1' >
                        Cookies<br></br>
                        <b className='mac1' >1,200 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div><div>
                    <img className='mac' src={nin} alt="" /><br></br>
                    <span className='mac1' >
                        Hot Loaf <br></br>
                        <b className='mac1' >35,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div><div>
                    <img className='mac' src={twen} alt="" /><br></br>
                    <span className='mac1' >
                        Supa Loaf<br></br>
                        <b className='mac1' >55,000 ugx</b><br></br>
                        <div style={{ background: "var(--color3, #19434a)", textAlign: "center",padding:"3px" }}>
                            <a href='/cart' className='addtocart1'>Add to Cart </a>
                        </div>                    </span>
                </div>
            </div>
            {/* banner over */}

            {/* contect */}
            <div className='contect' >
                <div className='con1' >Angella's Shop</div>
                <div className='con2' >Kampala, Uganda</div>
                <div className='con2' >+256 0123456</div>
                <div className='con3' >Follow Us:</div>
                <div className='x'>
                    <div className='tback'>
                        <svg className='t' xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                            <g clip-path="url(#clip0_1_25)">
                                <path d="M30 2.98241C28.8766 3.48007 27.685 3.80674 26.4649 3.95155C27.7358 3.18983 28.7116 1.98362 29.1711 0.546431C27.963 1.26337 26.6412 1.76849 25.2628 2.03999C24.14 0.843853 22.5405 0.0963135 20.7702 0.0963135C17.3711 0.0963135 14.6152 2.85209 14.6152 6.251C14.6152 6.73346 14.6696 7.20315 14.7745 7.65374C9.6593 7.39698 5.12414 4.9467 2.0884 1.22295C1.55871 2.13198 1.2552 3.18936 1.2552 4.31717C1.2552 6.45256 2.34188 8.33635 3.99328 9.44014C3.01588 9.40953 2.05998 9.14554 1.20539 8.67022C1.20504 8.696 1.20504 8.72178 1.20504 8.74768C1.20504 11.7298 3.3266 14.2174 6.14215 14.7828C5.2358 15.0293 4.28511 15.0654 3.3627 14.8883C4.14586 17.3335 6.41895 19.1129 9.11215 19.1627C7.0057 20.8134 4.35176 21.7974 1.46824 21.7974C0.971367 21.7974 0.481523 21.7683 0 21.7114C2.72379 23.4578 5.95898 24.4767 9.43477 24.4767C20.7559 24.4767 26.9466 15.0981 26.9466 6.96479C26.9466 6.69784 26.9407 6.43241 26.9288 6.1685C28.1337 5.29743 29.1737 4.21852 30 2.98241Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_25">
                                    <rect width="30" height="24.4922" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='iback'>
                        <svg className='i' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4417 1.77663C14.3967 1.68663 15.02 1.66663 20 1.66663C24.98 1.66663 25.6034 1.68829 27.5567 1.77663C29.51 1.86496 30.8434 2.17663 32.01 2.62829C33.2317 3.08996 34.34 3.81163 35.2567 4.74496C36.19 5.65996 36.91 6.76663 37.37 7.98996C37.8234 9.15663 38.1334 10.49 38.2234 12.44C38.3134 14.3983 38.3334 15.0216 38.3334 20C38.3334 24.98 38.3117 25.6033 38.2234 27.5583C38.135 29.5083 37.8234 30.8416 37.37 32.0083C36.91 33.2318 36.1888 34.3403 35.2567 35.2566C34.34 36.19 33.2317 36.91 32.01 37.37C30.8434 37.8233 29.51 38.1333 27.56 38.2233C25.6034 38.3133 24.98 38.3333 20 38.3333C15.02 38.3333 14.3967 38.3116 12.4417 38.2233C10.4917 38.135 9.15835 37.8233 7.99169 37.37C6.76822 36.9099 5.65972 36.1887 4.74335 35.2566C3.81065 34.3411 3.08888 33.2331 2.62835 32.01C2.17669 30.8433 1.86669 29.51 1.77669 27.56C1.68669 25.6016 1.66669 24.9783 1.66669 20C1.66669 15.02 1.68835 14.3966 1.77669 12.4433C1.86502 10.49 2.17669 9.15663 2.62835 7.98996C3.08956 6.76676 3.81189 5.65881 4.74502 4.74329C5.66009 3.81079 6.76747 3.08903 7.99002 2.62829C9.15669 2.17663 10.49 1.86663 12.44 1.77663H12.4417ZM27.4084 5.07663C25.475 4.98829 24.895 4.96996 20 4.96996C15.105 4.96996 14.525 4.98829 12.5917 5.07663C10.8034 5.15829 9.83335 5.45663 9.18669 5.70829C8.33169 6.04163 7.72002 6.43663 7.07835 7.07829C6.4701 7.67005 6.00199 8.39043 5.70835 9.18663C5.45669 9.83329 5.15835 10.8033 5.07669 12.5916C4.98835 14.525 4.97002 15.105 4.97002 20C4.97002 24.895 4.98835 25.475 5.07669 27.4083C5.15835 29.1966 5.45669 30.1666 5.70835 30.8133C6.00169 31.6083 6.47002 32.33 7.07835 32.9216C7.67002 33.53 8.39169 33.9983 9.18669 34.2916C9.83335 34.5433 10.8034 34.8416 12.5917 34.9233C14.525 35.0116 15.1034 35.03 20 35.03C24.8967 35.03 25.475 35.0116 27.4084 34.9233C29.1967 34.8416 30.1667 34.5433 30.8134 34.2916C31.6684 33.9583 32.28 33.5633 32.9217 32.9216C33.53 32.33 33.9984 31.6083 34.2917 30.8133C34.5434 30.1666 34.8417 29.1966 34.9234 27.4083C35.0117 25.475 35.03 24.895 35.03 20C35.03 15.105 35.0117 14.525 34.9234 12.5916C34.8417 10.8033 34.5434 9.83329 34.2917 9.18663C33.9584 8.33163 33.5634 7.71996 32.9217 7.07829C32.3299 6.47008 31.6095 6.00198 30.8134 5.70829C30.1667 5.45663 29.1967 5.15829 27.4084 5.07663ZM17.6584 25.6516C18.9661 26.196 20.4223 26.2695 21.7782 25.8595C23.1342 25.4495 24.3057 24.5815 25.0927 23.4037C25.8797 22.2259 26.2334 20.8114 26.0934 19.4018C25.9534 17.9922 25.3284 16.6749 24.325 15.675C23.6854 15.0358 22.912 14.5463 22.0606 14.2419C21.2091 13.9374 20.3007 13.8256 19.4008 13.9143C18.501 14.0031 17.6319 14.2903 16.8564 14.7552C16.0808 15.2201 15.4179 15.8512 14.9155 16.603C14.4131 17.3549 14.0837 18.2088 13.9509 19.1032C13.8181 19.9977 13.8853 20.9104 14.1476 21.7758C14.4099 22.6412 14.8608 23.4376 15.4679 24.1078C16.075 24.778 16.8231 25.3053 17.6584 25.6516ZM13.3367 13.3366C14.2117 12.4616 15.2506 11.7675 16.3939 11.2939C17.5371 10.8203 18.7625 10.5766 20 10.5766C21.2375 10.5766 22.4629 10.8203 23.6062 11.2939C24.7495 11.7675 25.7883 12.4616 26.6634 13.3366C27.5384 14.2117 28.2325 15.2505 28.7061 16.3938C29.1797 17.5371 29.4234 18.7625 29.4234 20C29.4234 21.2375 29.1797 22.4628 28.7061 23.6061C28.2325 24.7494 27.5384 25.7883 26.6634 26.6633C24.8961 28.4305 22.4993 29.4233 20 29.4233C17.5008 29.4233 15.1039 28.4305 13.3367 26.6633C11.5695 24.8961 10.5766 22.4992 10.5766 20C10.5766 17.5007 11.5695 15.1039 13.3367 13.3366ZM31.5134 11.98C31.7302 11.7754 31.9038 11.5294 32.0239 11.2566C32.1439 10.9837 32.208 10.6896 32.2124 10.3915C32.2167 10.0934 32.1612 9.79754 32.0492 9.52131C31.9371 9.24508 31.7707 8.99414 31.56 8.78336C31.3492 8.57257 31.0982 8.40622 30.822 8.29416C30.5458 8.18209 30.2499 8.12659 29.9518 8.13093C29.6537 8.13528 29.3596 8.19938 29.0867 8.31945C28.8139 8.43952 28.5679 8.61312 28.3634 8.82996C27.9655 9.25168 27.7477 9.81183 27.7562 10.3915C27.7646 10.9712 27.9987 11.5248 28.4086 11.9347C28.8186 12.3446 29.3721 12.5787 29.9518 12.5871C30.5315 12.5956 31.0916 12.3778 31.5134 11.98Z" fill="white" />
                        </svg>
                    </div>
                    <div className='fback'>
                        <svg className='f' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M22.3283 34.995V21.335H26.9366L27.6216 15.9867H22.3283V12.58C22.3283 11.0367 22.7583 9.98004 24.9733 9.98004H27.78V5.2117C26.4144 5.06536 25.0417 4.99469 23.6683 5.00004C19.595 5.00004 16.7983 7.4867 16.7983 12.0517V15.9767H12.22V21.325H16.8083V34.995H22.3283Z" fill="white" />
                        </svg>
                    </div>
                    <div className='wback' >
                        <svg className='w' xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                            <g clip-path="url(#clip0_1_20)">
                                <rect width="35" height="35.4102" fill="#00E676" />
                                <path d="M9.25082 30.3273L9.82298 30.6135C12.2074 32.044 14.8776 32.7116 17.548 32.7116C25.9405 32.7116 32.807 25.845 32.807 17.4525C32.807 13.4471 31.1857 9.53692 28.3247 6.67581C25.4636 3.81469 21.6487 2.19348 17.548 2.19348C9.15552 2.19348 2.28882 9.06004 2.38425 17.548C2.38425 20.4089 3.24257 23.1748 4.67306 25.5589L5.05451 26.1312L3.52873 31.758L9.25082 30.3273Z" fill="#00E676" />
                                <path d="M29.9459 5.14992C26.7034 1.81207 22.221 0 17.6433 0C7.91574 0 0.0954297 7.91561 0.190723 17.5478C0.190723 20.5997 1.04904 23.5562 2.47967 26.2265L0 35.2866L9.2508 32.9023C11.8258 34.3329 14.6867 35.0005 17.548 35.0005C27.1802 35.0005 35.0005 27.0848 35.0005 17.4527C35.0005 12.7795 33.1885 8.39248 29.9461 5.14992H29.9459ZM17.6433 32.0441C15.0683 32.0441 12.4934 31.3767 10.2998 30.0415L9.72768 29.7553L4.19631 31.1858L5.6268 25.7499L5.24535 25.1776C1.04904 18.4064 3.05184 9.44152 9.9184 5.24521C16.785 1.04904 25.6543 3.05184 29.8506 9.9184C34.0468 16.785 32.044 25.6543 25.1776 29.8506C22.9839 31.2811 20.3137 32.044 17.6433 32.044V32.0441ZM26.0358 21.4583L24.9867 20.9814C24.9867 20.9814 23.4609 20.3138 22.5072 19.8369C22.4118 19.8369 22.3165 19.7415 22.221 19.7415C21.9349 19.7415 21.7442 19.8369 21.5534 19.9324C21.5534 19.9324 21.4581 20.0277 20.123 21.5536C20.0275 21.7443 19.8368 21.8397 19.6461 21.8397H19.5506C19.4554 21.8397 19.2646 21.7443 19.1692 21.649L18.6923 21.4583C17.6433 20.9814 16.6897 20.4091 15.9266 19.6462C15.7359 19.4555 15.4498 19.2648 15.259 19.074C14.5914 18.4064 13.9238 17.6434 13.4471 16.7851L13.3517 16.5944C13.2564 16.4989 13.2564 16.4037 13.161 16.2129C13.161 16.0222 13.161 15.8315 13.2564 15.7361C13.2564 15.7361 13.6378 15.2592 13.9238 14.9732C14.1147 14.7823 14.21 14.4963 14.4007 14.3056C14.5914 14.0194 14.6869 13.638 14.5914 13.3518C14.4962 12.8749 13.3517 10.3 13.0657 9.72781C12.8748 9.44166 12.6842 9.34637 12.3981 9.25094H11.349C11.1582 9.25094 10.9676 9.34637 10.7767 9.34637L10.6813 9.44166C10.4906 9.53709 10.2998 9.72781 10.1091 9.8231C9.9184 10.014 9.82297 10.2045 9.63225 10.3954C8.96465 11.2537 8.5832 12.3028 8.5832 13.3518C8.5832 14.1147 8.77393 14.8777 9.06008 15.5453L9.15551 15.8315C10.0138 17.6434 11.1582 19.2648 12.6842 20.6953L13.0657 21.0767C13.3517 21.3628 13.6378 21.5536 13.8286 21.8396C15.8314 23.5564 18.1202 24.7961 20.6951 25.4637C20.9813 25.559 21.3627 25.559 21.6489 25.6544H22.6025C23.0794 25.6544 23.6515 25.4637 24.0331 25.273C24.3191 25.0823 24.5098 25.0823 24.7006 24.8916L24.8914 24.7007C25.0822 24.51 25.2729 24.4147 25.4636 24.224C25.6543 24.0332 25.845 23.8425 25.9405 23.6517C26.1312 23.2702 26.2265 22.7933 26.3219 22.3166V21.649C26.3219 21.649 26.2265 21.5536 26.0358 21.4583Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_20">
                                    <rect width="35" height="35.4102" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Ecommerce