import Link from "next/link";
import React from "react";

const LinkedIn = (): JSX.Element => (
  <Link href="" legacyBehavior>
    <a
      className="group flex flex-shrink-0 items-center justify-center rounded-full"
      target="_blank"
    >
      <svg
        className="group-hover:text-blue fill-current text-black transition"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Tiger VA LinkedIn</title>
        <path d="M3.93414 17.5011H0.290314V5.81748H3.93414V17.5011ZM2.11027 4.22373C0.945089 4.22373 0 3.26279 0 2.10264C8.33985e-09 1.54537 0.222331 1.01093 0.618083 0.616884C1.01384 0.222838 1.55059 0.00146484 2.11027 0.00146484C2.66995 0.00146484 3.2067 0.222838 3.60245 0.616884C3.9982 1.01093 4.22054 1.54537 4.22054 2.10264C4.22054 3.26279 3.27505 4.22373 2.11027 4.22373ZM17.5718 17.5011H13.9358V11.8136C13.9358 10.4581 13.9084 8.71982 12.0414 8.71982C10.1469 8.71982 9.85655 10.1925 9.85655 11.7159V17.5011H6.21664V5.81748H9.71139V7.41123H9.76239C10.2489 6.49326 11.4372 5.52451 13.2101 5.52451C16.8978 5.52451 17.5758 7.94248 17.5758 11.0831V17.5011H17.5718Z" />
      </svg>
    </a>
  </Link>
);

export default LinkedIn;
