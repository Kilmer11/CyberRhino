import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export function Logo() {
    return (
        <LogoContainer>
            <svg width="139" height="24" viewBox="0 0 139 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.70108 18.6541C6.33402 18.6541 5.11127 18.3807 4.03281 17.8339C2.96955 17.287 2.13413 16.5352 1.52654 15.5782C0.918965 14.6061 0.615175 13.4973 0.615175 12.2517C0.615175 11.0062 0.918965 9.90493 1.52654 8.94799C2.13413 7.99106 2.96955 7.24677 4.03281 6.71514C5.11127 6.16832 6.33402 5.89491 7.70108 5.89491C9.09851 5.89491 10.3061 6.1911 11.3238 6.78349C12.3415 7.37588 13.063 8.2113 13.4883 9.28976L10.139 10.9986C9.85039 10.4214 9.49344 10.0037 9.06813 9.74544C8.64283 9.47203 8.17955 9.33533 7.67829 9.33533C7.17704 9.33533 6.72135 9.44925 6.31124 9.67709C5.90112 9.90493 5.57455 10.2391 5.33152 10.6796C5.10367 11.1049 4.98975 11.6289 4.98975 12.2517C4.98975 12.8897 5.10367 13.4289 5.33152 13.8694C5.57455 14.3099 5.90112 14.6441 6.31124 14.8719C6.72135 15.0997 7.17704 15.2137 7.67829 15.2137C8.17955 15.2137 8.64283 15.0846 9.06813 14.8263C9.49344 14.5529 9.85039 14.1276 10.139 13.5504L13.4883 15.2592C13.063 16.3377 12.3415 17.1731 11.3238 17.7655C10.3061 18.3579 9.09851 18.6541 7.70108 18.6541ZM17.0147 23.0742C16.3615 23.0742 15.7008 22.9679 15.0324 22.7553C14.3793 22.5578 13.8477 22.292 13.4375 21.9578L14.9413 18.9275C15.1995 19.1553 15.4957 19.33 15.8299 19.4515C16.1793 19.5882 16.521 19.6566 16.8552 19.6566C17.3261 19.6566 17.6982 19.5503 17.9716 19.3376C18.245 19.125 18.4805 18.7908 18.6779 18.3351L19.2475 16.8997L19.5893 16.4668L23.7816 6.09996H27.9055L22.574 18.9503C22.1487 20.0135 21.6551 20.8414 21.0931 21.4338C20.5462 22.0413 19.9311 22.4667 19.2475 22.7097C18.5792 22.9527 17.8349 23.0742 17.0147 23.0742ZM18.7007 18.9731L13.2553 6.09996H17.6982L21.7082 16.0795L18.7007 18.9731ZM36.7941 18.6541C35.6852 18.6541 34.7587 18.4262 34.0144 17.9706C33.2853 17.5149 32.7385 16.8162 32.3739 15.8744C32.0094 14.9327 31.8271 13.7251 31.8271 12.2517C31.8271 10.8087 32.017 9.61633 32.3967 8.67458C32.7916 7.73283 33.3612 7.03412 34.1055 6.57843C34.8498 6.12275 35.746 5.89491 36.7941 5.89491C37.9181 5.89491 38.9358 6.15313 39.8472 6.66957C40.7737 7.18601 41.5028 7.9227 42.0345 8.87964C42.5813 9.82139 42.8547 10.9454 42.8547 12.2517C42.8547 13.5732 42.5813 14.7124 42.0345 15.6693C41.5028 16.6111 40.7737 17.3478 39.8472 17.8794C38.9358 18.3959 37.9181 18.6541 36.7941 18.6541ZM29.0246 18.449V1.54311H33.3537V8.17333L33.1258 12.2517L33.1486 16.3301V18.449H29.0246ZM35.8827 15.2137C36.3688 15.2137 36.8017 15.0997 37.1814 14.8719C37.5763 14.6441 37.8877 14.3099 38.1156 13.8694C38.3586 13.4137 38.4801 12.8745 38.4801 12.2517C38.4801 11.6289 38.3586 11.1049 38.1156 10.6796C37.8877 10.2391 37.5763 9.90493 37.1814 9.67709C36.8017 9.44925 36.3688 9.33533 35.8827 9.33533C35.3966 9.33533 34.9561 9.44925 34.5612 9.67709C34.1815 9.90493 33.8701 10.2391 33.6271 10.6796C33.3992 11.1049 33.2853 11.6289 33.2853 12.2517C33.2853 12.8745 33.3992 13.4137 33.6271 13.8694C33.8701 14.3099 34.1815 14.6441 34.5612 14.8719C34.9561 15.0997 35.3966 15.2137 35.8827 15.2137ZM51.3375 18.6541C49.8794 18.6541 48.6034 18.3807 47.5098 17.8339C46.4313 17.2718 45.5883 16.5124 44.9807 15.5554C44.3884 14.5833 44.0922 13.4821 44.0922 12.2517C44.0922 11.0214 44.3808 9.92772 44.958 8.97078C45.5503 7.99865 46.363 7.24677 47.3959 6.71514C48.4288 6.16832 49.5908 5.89491 50.8819 5.89491C52.097 5.89491 53.2059 6.14553 54.2084 6.64679C55.2109 7.13285 56.0083 7.85435 56.6007 8.81129C57.1931 9.76823 57.4893 10.9302 57.4893 12.2973C57.4893 12.4492 57.4817 12.6239 57.4665 12.8213C57.4513 13.0188 57.4361 13.2011 57.4209 13.3681H47.6465V11.0897H55.1197L53.4793 11.7277C53.4945 11.1657 53.3881 10.6796 53.1603 10.2695C52.9476 9.85936 52.6438 9.54039 52.2489 9.31254C51.8692 9.0847 51.4211 8.97078 50.9046 8.97078C50.3882 8.97078 49.9325 9.0847 49.5376 9.31254C49.1579 9.54039 48.8617 9.86696 48.649 10.2923C48.4364 10.7024 48.33 11.1884 48.33 11.7505V12.4112C48.33 13.0188 48.4515 13.5428 48.6946 13.9833C48.9528 14.4238 49.3173 14.7656 49.7882 15.0086C50.2591 15.2364 50.8211 15.3504 51.4743 15.3504C52.0818 15.3504 52.5983 15.2668 53.0236 15.0997C53.4641 14.9175 53.897 14.6441 54.3223 14.2795L56.6007 16.6491C56.0083 17.3022 55.2792 17.8035 54.4134 18.1528C53.5476 18.487 52.5223 18.6541 51.3375 18.6541ZM59.4852 18.449V6.09996H63.6092V9.69988L62.994 8.67458C63.3586 7.74802 63.9509 7.0569 64.7712 6.60122C65.5914 6.13034 66.5863 5.89491 67.7559 5.89491V9.79101C67.5585 9.76063 67.3838 9.74544 67.2319 9.74544C67.0952 9.73025 66.9433 9.72266 66.7762 9.72266C65.8952 9.72266 65.1813 9.96569 64.6345 10.4518C64.0877 10.9226 63.8142 11.6973 63.8142 12.7757V18.449H59.4852ZM71.1871 18.6541C70.458 18.6541 69.8428 18.4111 69.3416 17.925C68.8403 17.4389 68.5897 16.8238 68.5897 16.0795C68.5897 15.3048 68.8403 14.6896 69.3416 14.2339C69.8428 13.7631 70.458 13.5276 71.1871 13.5276C71.9162 13.5276 72.5314 13.7631 73.0326 14.2339C73.5339 14.6896 73.7845 15.3048 73.7845 16.0795C73.7845 16.8238 73.5339 17.4389 73.0326 17.925C72.5314 18.4111 71.9162 18.6541 71.1871 18.6541ZM75.8169 18.449V6.09996H79.9409V9.69988L79.3257 8.67458C79.6902 7.74802 80.2826 7.0569 81.1029 6.60122C81.9231 6.13034 82.918 5.89491 84.0876 5.89491V9.79101C83.8901 9.76063 83.7155 9.74544 83.5636 9.74544C83.4269 9.73025 83.275 9.72266 83.1079 9.72266C82.2269 9.72266 81.513 9.96569 80.9662 10.4518C80.4193 10.9226 80.1459 11.6973 80.1459 12.7757V18.449H75.8169ZM93.9169 5.89491C94.8738 5.89491 95.7396 6.09237 96.5143 6.48729C97.2889 6.86703 97.8965 7.45942 98.337 8.26447C98.7927 9.06951 99.0205 10.11 99.0205 11.3859V18.449H94.6915V12.0922C94.6915 11.2112 94.5093 10.5733 94.1447 10.1783C93.7953 9.76823 93.3017 9.56317 92.6637 9.56317C92.208 9.56317 91.7903 9.6695 91.4106 9.88215C91.0309 10.0796 90.7347 10.391 90.522 10.8163C90.3094 11.2416 90.203 11.796 90.203 12.4796V18.449H85.874V1.54311H90.203V9.60874L89.2005 8.58345C89.6714 7.68727 90.317 7.01893 91.1372 6.57843C91.9574 6.12275 92.884 5.89491 93.9169 5.89491ZM101.738 18.449V6.09996H106.067V18.449H101.738ZM103.903 4.73291C103.113 4.73291 102.475 4.51266 101.989 4.07216C101.503 3.63167 101.26 3.08485 101.26 2.4317C101.26 1.77855 101.503 1.23173 101.989 0.791232C102.475 0.350736 103.113 0.130489 103.903 0.130489C104.693 0.130489 105.331 0.343142 105.817 0.768448C106.303 1.17856 106.546 1.7102 106.546 2.36335C106.546 3.04687 106.303 3.61648 105.817 4.07216C105.346 4.51266 104.708 4.73291 103.903 4.73291ZM116.924 5.89491C117.881 5.89491 118.746 6.09237 119.521 6.48729C120.296 6.86703 120.903 7.45942 121.344 8.26447C121.799 9.06951 122.027 10.11 122.027 11.3859V18.449H117.698V12.0922C117.698 11.2112 117.516 10.5733 117.151 10.1783C116.802 9.76823 116.308 9.56317 115.67 9.56317C115.215 9.56317 114.797 9.6695 114.417 9.88215C114.038 10.0796 113.741 10.391 113.529 10.8163C113.316 11.2416 113.21 11.796 113.21 12.4796V18.449H108.881V6.09996H113.005V9.60874L112.207 8.58345C112.678 7.68727 113.324 7.01893 114.144 6.57843C114.964 6.12275 115.891 5.89491 116.924 5.89491ZM131.098 18.6541C129.746 18.6541 128.546 18.3807 127.498 17.8339C126.45 17.287 125.622 16.5352 125.015 15.5782C124.422 14.6061 124.126 13.4973 124.126 12.2517C124.126 11.0062 124.422 9.90493 125.015 8.94799C125.622 7.99106 126.45 7.24677 127.498 6.71514C128.546 6.16832 129.746 5.89491 131.098 5.89491C132.45 5.89491 133.65 6.16832 134.698 6.71514C135.761 7.24677 136.589 7.99106 137.182 8.94799C137.774 9.90493 138.07 11.0062 138.07 12.2517C138.07 13.4973 137.774 14.6061 137.182 15.5782C136.589 16.5352 135.761 17.287 134.698 17.8339C133.65 18.3807 132.45 18.6541 131.098 18.6541ZM131.098 15.2137C131.6 15.2137 132.04 15.0997 132.42 14.8719C132.815 14.6441 133.126 14.3099 133.354 13.8694C133.582 13.4137 133.696 12.8745 133.696 12.2517C133.696 11.6289 133.582 11.1049 133.354 10.6796C133.126 10.2391 132.815 9.90493 132.42 9.67709C132.04 9.44925 131.6 9.33533 131.098 9.33533C130.612 9.33533 130.172 9.44925 129.777 9.67709C129.397 9.90493 129.086 10.2391 128.843 10.6796C128.615 11.1049 128.501 11.6289 128.501 12.2517C128.501 12.8745 128.615 13.4137 128.843 13.8694C129.086 14.3099 129.397 14.6441 129.777 14.8719C130.172 15.0997 130.612 15.2137 131.098 15.2137Z" fill="url(#paint0_linear_77_125)"/>
                <defs>
                <linearGradient id="paint0_linear_77_125" x1="69.5" y1="-3.55097" x2="69.5" y2="24.449" gradientUnits="userSpaceOnUse">
                <stop offset="0.28125" stop-color="#15BFE3"/>
                <stop offset="1" stop-color="#1522EC"/>
                </linearGradient>
                </defs>
            </svg>

            <svg width="33" height="49" viewBox="0 0 33 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.84322 0.512811C8.88163 0.223045 9.12483 -1.52588e-05 9.41713 -1.52588e-05C9.5558 -1.52588e-05 9.69056 0.0501131 9.79117 0.145542C11.0368 1.32705 11.5795 2.84018 12.1424 6.82042L12.145 6.83963C13.7279 6.23159 15.186 5.81878 16.5949 5.60127L18.3404 4.84112C19.8349 4.44186 20.4386 4.41556 21.1416 4.68888L24.0036 6.27215L23.9998 6.27184C25.1872 6.6524 26.4296 7.16044 27.7666 7.796C27.9932 7.34799 28.273 6.91951 28.5645 6.47301C29.1927 5.51091 29.8756 4.46509 30.1992 2.95977C30.3065 2.46113 30.7153 2.0094 31.1911 2.19329C32.3032 2.62318 33.1247 4.35619 32.9855 8.09901C32.95 11.8983 31.405 14.3774 29.7091 14.621C29.4557 14.6574 29.2267 14.5436 29.0592 14.3582C31.9231 21.5144 33.2693 27.6112 32.7118 39.7034L32.6466 39.7164C32.4192 40.6118 31.542 41.705 29.6971 43.4789C22.5967 49.1409 18.2468 49.5629 9.84539 45.5189L10.3647 40.6507C9.15848 40.5898 8.13024 40.507 7.23837 40.3742C3.93331 40.3586 3.09508 40.166 2.84297 39.673C2.22861 39.2193 2.02337 38.5934 1.82463 37.1488C1.43824 36.5666 1.06176 35.8855 0.668609 35.0874C0.428452 34.5999 0.50292 34.0159 0.840246 33.5898C1.80978 32.3651 2.66325 31.2122 3.41651 30.0912C2.17972 29.1854 1.15682 27.584 0.658396 25.0278C0.00116053 19.9584 0.617692 17.4156 2.66793 13.6404C4.1198 16.6413 5.30363 18.6063 7.73148 20.5594C7.97374 19.5992 8.18331 18.5923 8.3673 17.5206C8.05038 16.5341 8.01716 15.7879 8.15951 14.6489C8.17638 14.7745 8.36602 15.2176 8.64647 15.708C8.68 15.4648 8.71256 15.2182 8.74421 14.9682C8.75755 14.8628 8.78266 14.7597 8.81867 14.661C8.78566 14.6467 8.77241 14.6313 8.78027 14.6147C8.86497 14.4368 8.80327 14.0987 8.70804 13.577L8.70804 13.5769C8.56511 12.7938 8.34665 11.5967 8.43428 9.90604C6.52683 7.73166 7.01888 6.42557 7.76463 4.44605L7.76463 4.44605C8.15898 3.39927 8.62428 2.16419 8.84322 0.512811ZM8.16381 14.6147C8.15833 14.6184 8.15699 14.6301 8.15951 14.6489L8.16381 14.6147Z" fill="url(#paint0_linear_77_86)"/>
                <path d="M25.8512 23.6265L25.808 24.4757C25.7871 24.8845 25.6135 25.275 25.3264 25.5667C25.1606 25.7351 24.9583 25.8676 24.7373 25.9512C24.3693 26.0903 23.9634 26.0921 23.5941 25.9563L23.4232 25.8934C23.1066 25.7769 22.8261 25.5794 22.6098 25.3205C22.3973 25.0661 22.254 24.7613 22.1937 24.4353L22.0367 23.5865C21.9851 23.3073 21.9664 23.0231 21.9808 22.7396L22.0681 21.0254C22.08 20.792 22.1253 20.5615 22.2026 20.3409L22.356 19.9029C22.4941 19.5087 22.7971 19.1943 23.186 19.0417C23.5546 18.8971 23.9666 18.9112 24.3245 19.0808L24.4291 19.1304C24.8041 19.3081 25.1012 19.6167 25.2647 19.9981L25.4491 20.4286C25.57 20.7105 25.6459 21.0096 25.6743 21.3151L25.8404 23.105C25.8565 23.2783 25.8601 23.4526 25.8512 23.6265Z" fill="white"/>
                <path d="M23.9854 22.7612L26.5242 21.6598L26.6705 23.4311L23.9854 22.7612Z" fill="url(#paint1_linear_77_86)"/>
                <path d="M6.22121 31.1603L5.2789 33.149" stroke="white" stroke-width="0.632896"/>
                <circle cx="5.12698" cy="33.4617" r="0.517606" fill="white"/>
                <circle cx="14.1392" cy="22.5615" r="0.517606" fill="white"/>
                <circle cx="12.8604" cy="31.0868" r="0.517606" fill="white"/>
                <circle cx="14.9922" cy="27.8594" r="0.517606" fill="white"/>
                <path d="M8.87158 30.5692L10.3026 32.3656L12.5862 31.1782" stroke="white" stroke-width="0.632896"/>
                <path d="M11.9473 25.6976L13.5914 25.3018L14.1395 22.592" stroke="white" stroke-width="0.632896"/>
                <path d="M12.1602 27.4331L14.8091 27.8594" stroke="white" stroke-width="0.632896"/>
                <path d="M5.40014 30.691L3.42106 30.082L2.53809 30.8737L5.40014 31.0868L7.44012 31.4522L9.78457 30.082L7.44012 31.0868L5.40014 30.691Z" fill="white"/>
                <path d="M11.9712 36.3238L12.4316 37.1458C12.4316 37.1458 17.738 37.1084 17.8248 37.1458C17.9116 37.1832 23.6847 36.7165 23.6163 36.6403C24.694 36.332 25.2449 36.1491 26.1292 35.8062C25.1953 35.9869 24.6641 36.0821 23.6163 36.1715C23.7534 36.2339 18.1726 36.5986 17.9084 36.5673C17.6443 36.5361 11.9712 36.3238 11.9712 36.3238Z" fill="white"/>
                <path d="M7.99474 16.2867L7.90861 15.3995L7.69052 16.2744L7.94938 17.4123L8.27399 18.431L9.36897 19.2369L10.0036 19.3811L9.37878 18.9935L8.76075 18.4506L8.31445 17.427L7.99474 16.2867Z" fill="white"/>
                <path d="M11.8858 27.3113V24.7842L12.312 27.5853L10.9419 28.9555L11.8858 27.3113Z" fill="white"/>
                <path d="M27.7485 10.9002L28.6924 13.7318L29.3927 12.2399L29.9407 10.9002L29.3927 10.1694L30.1539 8.67751L30.5801 5.60232L29.7885 7.39872L28.6924 8.67751L27.7485 10.9002Z" fill="white"/>
                <path d="M10.394 8.09899L12.1904 6.8202L11.9164 5.17604L11.8251 6.51573L10.394 8.09899Z" fill="white"/>
                <path d="M15.7829 39.8252L10.3632 40.6473L9.17578 41.5911L11.8247 42.261L15.7829 39.8252Z" fill="white"/>
                <path d="M8.9627 19.2732L9.48031 19.2123L8.19822 18.1466L7.71436 20.0335L9.75433 21.6785L8.68867 20.1257L8.9627 19.2732Z" fill="white"/>
                <path d="M23.6996 27.1895L21.8423 26.7633L23.6996 27.6158H25.1915L26.6834 26.4283L25.1915 27.1895H23.6996Z" fill="white"/>
                <path d="M24.5214 28.1943L23.5166 28.0116L24.5214 28.5292L25.313 28.0116L24.5214 28.1943Z" fill="white"/>
                <path d="M26.6831 8.37302C26.623 7.86527 27.2007 7.24647 27.2007 7.24647L27.7792 7.76407L26.9267 9.71271C26.9267 9.71271 26.7346 8.80848 26.6831 8.37302Z" fill="white"/>
                <path d="M10.1501 21.983L7.71436 20.552L7.86659 19.9126L8.3842 20.552L10.1501 21.983Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_77_86" x1="16.7038" y1="3.79736" x2="16.7038" y2="56.8024" gradientUnits="userSpaceOnUse">
                <stop stop-color="#15BFE3"/>
                <stop offset="1" stop-color="#1522EC"/>
                </linearGradient>
                <linearGradient id="paint1_linear_77_86" x1="19.4726" y1="5.14229" x2="20.1055" y2="48.2583" gradientUnits="userSpaceOnUse">
                <stop stop-color="#15BFE3"/>
                <stop offset="1" stop-color="#1522EC"/>
                </linearGradient>
                </defs>
            </svg>
        </LogoContainer>
    )
}
