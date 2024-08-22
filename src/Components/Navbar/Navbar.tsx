import dropdown from "../../assets/dropdown.svg";
import lang from "../../assets/lang.svg";
const navItems = [
  {
    content: "Employers",
  },
  {
    content: "Health Plans",
  },
  {
    content: "indivisuals",
  },
  {
    content: "Resources",
    dropdown: true,
  },
  {
    content: "About",
    dropdown: true,
  },
  {
    content: "EN",
    dropdown: true,
    world: true,
  },
];
export default function Navbar() {
  return (
    <nav className="w-full bg-navBg items-center h-24 text-black p-2 flex justify-center">
      <div className="flex justify-around items-center w-full">
        <div className="inline-flex items-center gap-x-2">
          <svg
            className="w-8 h-8 inline"
            viewBox="0 0 43 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.3158 41H6.81123C3.0324 41 0 38.0455 0 34.4091V6.63636C0 2.95455 3.0324 0 6.81123 0H35.3158C39.0479 0 42.127 2.95455 42.127 6.63636V34.4091C42.0803 38.0455 39.0479 41 35.3158 41Z"
              fill="#3579F8"
            />
            <path
              d="M9.75049 26.2728V24.3182V14.4546C9.75049 11.9546 11.8032 9.95459 14.3691 9.95459H27.7116C30.2775 9.95459 32.3302 11.9546 32.3302 14.4546V23.591C32.3302 26.091 30.2775 28.091 27.7116 28.091H15.8619L14.4157 28.9091L10.7302 30.9546C10.3103 31.1819 9.75049 30.9091 9.75049 30.4091V26.2728Z"
              fill="white"
            />
            <path
              d="M23.7459 16.4999H21.8798V14.6817C21.8798 14.3635 21.6466 14.1362 21.32 14.1362H20.7602C20.4336 14.1362 20.2003 14.3635 20.2003 14.6817V16.4999H18.3342C18.0077 16.4999 17.7744 16.7271 17.7744 17.0453V17.5908C17.7744 17.909 18.0077 18.1362 18.3342 18.1362H20.2003V19.9544C20.2003 20.2726 20.4336 20.4999 20.7602 20.4999H21.32C21.6466 20.4999 21.8798 20.2726 21.8798 19.9544V18.1362H23.7459C24.0725 18.1362 24.3057 17.909 24.3057 17.5908V17.0453C24.3057 16.7271 24.0725 16.4999 23.7459 16.4999Z"
              fill="#3579F8"
            />
            <path
              d="M21.04 24.818C20.0603 24.818 19.1273 24.5907 18.2409 24.1816C17.1679 23.6361 16.3281 22.8634 15.675 21.818C15.4417 21.4543 15.535 21.0452 15.8616 20.8634C16.0016 20.7725 16.1415 20.7271 16.2815 20.7271C16.5147 20.7271 16.748 20.8634 16.8413 21.0452C17.3078 21.7725 17.7743 22.2271 18.3342 22.5907C19.0339 23.0452 19.827 23.318 20.6201 23.3634C20.7601 23.3634 20.8534 23.3634 20.9933 23.3634C22.6262 23.3634 23.9791 22.6816 24.9588 21.318C25.0054 21.2725 25.0521 21.1816 25.0987 21.1361L25.1454 21.0452C25.332 20.7725 25.6119 20.7271 25.7519 20.7271C25.8918 20.7271 26.0318 20.7725 26.1717 20.818C26.4983 20.9998 26.5916 21.4089 26.405 21.7725C25.8918 22.5907 25.2387 23.2725 24.4456 23.7725C23.6525 24.2725 22.8128 24.5907 21.8797 24.7271C21.6931 24.7725 21.4599 24.7725 21.2733 24.7725C21.2266 24.818 21.1333 24.818 21.04 24.818Z"
              fill="#3579F8"
            />
          </svg>
          <svg
            width="162"
            height="31"
            viewBox="0 0 162 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.0412 4.4545V29.0909C29.0412 29.5909 28.6214 30 28.1082 30H25.4957C24.9825 30 24.5626 29.5909 24.5626 29.0909V16.0909C24.5626 15.1363 23.2097 14.8636 22.7898 15.7272L16.4918 29.4545C16.3518 29.7727 16.0253 30 15.652 30H13.7393C13.3661 30 13.0395 29.7727 12.8996 29.4545L6.6015 15.6818C6.18163 14.8181 4.82871 15.0909 4.82871 16.0454V29.0909C4.82871 29.5909 4.40884 30 3.89567 30H1.28314C0.769968 30 0.350098 29.5909 0.350098 29.0909V4.4545C0.350098 3.9545 0.769968 3.54541 1.28314 3.54541H4.59545C4.96867 3.54541 5.29524 3.77268 5.4352 4.09087L13.8793 22.4545C14.2058 23.1363 15.2322 23.1363 15.5587 22.4545L23.9561 4.09087C24.0961 3.77268 24.4227 3.54541 24.7959 3.54541H28.0615C28.668 3.54541 29.0412 3.9545 29.0412 4.4545Z"
              fill="#3C3C3B"
            />
            <path
              d="M53.6272 21.0907H39.0717C38.4652 21.0907 38.0453 21.6362 38.1853 22.1816C38.4652 23.3635 39.025 24.318 39.9114 25.0907C41.0777 26.0907 42.4773 26.5907 44.1101 26.5907C46.3494 26.5907 47.9356 25.7726 48.962 24.0907C49.1019 23.818 49.4285 23.6816 49.7551 23.6816H52.6475C53.3473 23.6816 53.7671 24.3635 53.4872 24.9998C52.7874 26.3635 51.8078 27.4998 50.5015 28.4544C48.7754 29.6816 46.676 30.318 44.1568 30.318C42.1041 30.318 40.2846 29.8635 38.6518 28.9544C37.019 28.0453 35.7594 26.7726 34.8263 25.1362C33.8933 23.4998 33.4268 21.5907 33.4268 19.4544C33.4268 17.318 33.8933 15.4089 34.7797 13.7725C35.6661 12.1362 36.9257 10.8635 38.5585 9.99982C40.1913 9.09073 42.0574 8.68164 44.1568 8.68164C46.1628 8.68164 47.9823 9.09073 49.5684 9.95437C51.1546 10.818 52.3676 12.0453 53.254 13.5907C54.1404 15.1362 54.5602 16.9544 54.5602 18.9544C54.5602 19.4089 54.5602 19.8635 54.5136 20.2725C54.5136 20.7725 54.0937 21.0907 53.6272 21.0907ZM48.962 17.5907C49.5218 17.5907 49.9883 17.0907 49.8484 16.4998C49.6151 15.4089 49.1019 14.4544 48.2155 13.7271C47.0492 12.7726 45.6497 12.2725 43.9702 12.2725C42.4306 12.2725 41.1244 12.7271 40.0514 13.6816C39.2116 14.4089 38.6518 15.2725 38.3252 16.3635C38.1386 16.9544 38.6052 17.4998 39.2116 17.4998H48.962V17.5907Z"
              fill="#3C3C3B"
            />
            <path
              d="M58.8519 13.8179C59.7383 12.1815 60.9513 10.9542 62.5375 10.0451C64.077 9.13605 65.8031 8.68151 67.7159 8.68151C69.1154 8.68151 70.515 8.99969 71.8679 9.5906C72.521 9.86333 73.1275 10.227 73.6874 10.5906C74.2938 11.0451 75.1336 10.6361 75.1336 9.86333V2.72696C75.1336 2.22696 75.5534 1.81787 76.0666 1.81787H78.7258C79.239 1.81787 79.6588 2.22696 79.6588 2.72696V29.0906C79.6588 29.5906 79.239 29.9997 78.7258 29.9997H76.0666C75.5534 29.9997 75.1336 29.5906 75.1336 29.0906V29.0451C75.1336 28.2724 74.2472 27.9088 73.6407 28.3633C73.1742 28.727 72.661 29.0451 72.1478 29.3179C70.8416 29.9542 69.3953 30.3179 67.7159 30.3179C65.8498 30.3179 64.1236 29.8633 62.5841 28.9088C61.0446 27.9997 59.8316 26.6815 58.8986 25.0451C58.0122 23.3633 57.5457 21.4997 57.5457 19.4088C57.499 17.3179 57.9655 15.4542 58.8519 13.8179ZM74.1539 15.727C73.5474 14.6815 72.7543 13.8633 71.7746 13.2724C70.7949 12.727 69.7219 12.4542 68.5556 12.4542C67.3893 12.4542 66.3629 12.727 65.3366 13.2724C64.3569 13.8179 63.5638 14.6361 62.9573 15.6815C62.3508 16.727 62.0243 17.9997 62.0243 19.4088C62.0243 20.8633 62.3508 22.1361 62.9573 23.227C63.5638 24.3179 64.3569 25.1361 65.3832 25.727C66.3629 26.3179 67.436 26.5906 68.5556 26.5906C69.7219 26.5906 70.7483 26.3179 71.7746 25.7724C72.7543 25.227 73.5474 24.4088 74.1539 23.3179C74.7604 22.227 75.0869 20.9997 75.0869 19.5451C75.0869 18.0451 74.807 16.7724 74.1539 15.727Z"
              fill="#3C3C3B"
            />
            <path
              d="M85.6771 5.45432C85.1173 4.90887 84.8374 4.27251 84.8374 3.49978C84.8374 2.72705 85.1173 2.04523 85.6771 1.54523C86.237 0.999778 86.8901 0.727051 87.6832 0.727051C88.4763 0.727051 89.1294 0.999778 89.6892 1.54523C90.2491 2.09069 90.529 2.72705 90.529 3.49978C90.529 4.27251 90.2491 4.95432 89.6892 5.45432C89.1294 5.99978 88.4763 6.27251 87.6832 6.27251C86.8901 6.22705 86.1903 5.99978 85.6771 5.45432ZM89.8758 9.90887V29.0907C89.8758 29.5907 89.456 29.9998 88.9428 29.9998H86.3303C85.8171 29.9998 85.3972 29.5907 85.3972 29.0907V9.90887C85.3972 9.40887 85.8171 8.99978 86.3303 8.99978H88.9428C89.456 8.99978 89.8758 9.40887 89.8758 9.90887Z"
              fill="#3C3C3B"
            />
            <path
              d="M104.804 20.1361L112.735 28.4997C113.295 29.0906 112.875 29.9997 112.082 29.9997H108.583C108.303 29.9997 108.07 29.9088 107.883 29.6815L101.819 22.8179C101.259 22.1815 100.233 22.5906 100.233 23.4088V29.0906C100.233 29.5906 99.8127 29.9997 99.2995 29.9997H96.687C96.1738 29.9997 95.7539 29.5906 95.7539 29.0906V2.72696C95.7539 2.22696 96.1738 1.81787 96.687 1.81787H99.2995C99.8127 1.81787 100.233 2.22696 100.233 2.72696V15.727C100.233 16.5451 101.306 16.9542 101.865 16.3179L107.79 9.36333C107.977 9.18151 108.21 9.04514 108.49 9.04514H112.129C112.922 9.04514 113.342 9.95424 112.782 10.5451L104.851 18.9542C104.478 19.227 104.478 19.7724 104.804 20.1361Z"
              fill="#3C3C3B"
            />
            <path
              d="M136.062 21.0907H121.506C120.9 21.0907 120.48 21.6362 120.62 22.1816C120.9 23.3635 121.46 24.318 122.346 25.0907C123.512 26.0907 124.912 26.5907 126.545 26.5907C128.784 26.5907 130.37 25.7726 131.397 24.0907C131.536 23.818 131.863 23.6816 132.19 23.6816H135.082C135.782 23.6816 136.202 24.3635 135.922 24.9998C135.222 26.3635 134.242 27.4998 132.936 28.4544C131.21 29.6816 129.111 30.318 126.591 30.318C124.539 30.318 122.719 29.8635 121.086 28.9544C119.454 28.0453 118.194 26.7726 117.261 25.1362C116.328 23.4998 115.861 21.5907 115.861 19.4544C115.861 17.318 116.328 15.4089 117.214 13.7725C118.101 12.1362 119.36 10.8635 120.993 9.99982C122.626 9.09073 124.492 8.68164 126.591 8.68164C128.597 8.68164 130.417 9.09073 132.003 9.95437C133.589 10.818 134.802 12.0453 135.689 13.5907C136.575 15.1362 136.995 16.9544 136.995 18.9544C136.995 19.4089 136.995 19.8635 136.948 20.2725C136.948 20.7725 136.528 21.0907 136.062 21.0907ZM131.397 17.5907C131.956 17.5907 132.423 17.0907 132.283 16.4998C132.05 15.4089 131.536 14.4544 130.65 13.7271C129.484 12.7726 128.084 12.2725 126.405 12.2725C124.865 12.2725 123.559 12.7271 122.486 13.6816C121.646 14.4089 121.086 15.2725 120.76 16.3635C120.573 16.9544 121.04 17.4998 121.646 17.4998H131.397V17.5907Z"
              fill="#3C3C3B"
            />
            <path
              d="M141.287 13.818C142.173 12.1816 143.386 10.9544 144.972 10.0453C146.512 9.13619 148.238 8.68164 150.104 8.68164C151.784 8.68164 153.276 8.99982 154.536 9.63619C155.096 9.90891 155.609 10.2271 156.076 10.5907C156.682 11.0453 157.568 10.6362 157.568 9.90891C157.568 9.40891 157.988 8.99982 158.502 8.99982H161.161C161.674 8.99982 162.094 9.40891 162.094 9.90891V29.0907C162.094 29.5907 161.674 29.9998 161.161 29.9998H158.502C157.988 29.9998 157.568 29.5907 157.568 29.0907V29.0453C157.568 28.2726 156.682 27.9089 156.076 28.3635C155.609 28.7271 155.096 29.0453 154.489 29.3635C153.183 29.9998 151.69 30.3635 150.057 30.3635C148.191 30.3635 146.512 29.9089 144.972 28.9544C143.433 28.0453 142.22 26.7271 141.333 25.0907C140.447 23.4089 139.981 21.5453 139.981 19.4544C139.934 17.318 140.354 15.4544 141.287 13.818ZM156.589 15.7271C155.982 14.6816 155.189 13.8635 154.209 13.2725C153.23 12.7271 152.157 12.4544 150.99 12.4544C149.824 12.4544 148.798 12.7271 147.771 13.2725C146.792 13.818 145.999 14.6362 145.392 15.6816C144.786 16.7271 144.459 17.9998 144.459 19.4089C144.459 20.8635 144.786 22.1362 145.392 23.2271C145.999 24.318 146.792 25.1362 147.818 25.7271C148.798 26.318 149.871 26.5907 150.99 26.5907C152.157 26.5907 153.183 26.318 154.209 25.7725C155.189 25.2271 155.982 24.4089 156.589 23.318C157.195 22.2271 157.522 20.9998 157.522 19.5453C157.522 18.0453 157.195 16.7725 156.589 15.7271Z"
              fill="#3C3C3B"
            />
          </svg>
        </div>
        <div className="inline-flex justify-evenly items-center gap-x-8">
          {navItems.map((item) => {
            return (
              <p
                key={item.content}
                className="inline m-0 font-medium cursor-pointer"
              >
                {item.world && <img src={lang} className="inline mr-2" />}
                {item.content}
                {item.dropdown && (
                  <img className="inline ml-2" src={dropdown} />
                )}
              </p>
            );
          })}
          <button className="border-2 bg-navBtn rounded border-navBtnBorder text-white px-4 py-2">
            Access Benefits
          </button>
        </div>
      </div>
    </nav>
  );
}
