import React from 'react'

type IconType = React.HTMLAttributes<HTMLOrSVGElement> & {
  fill?: string
}

export const IconArrowDown = (props: IconType) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.7348 14.0909C16.1094 14.4968 16.0841 15.1294 15.6783 15.504L12.1783 18.7348C11.7953 19.0884 11.2048 19.0884 10.8218 18.7348L7.32172 15.504C6.9159 15.1294 6.89059 14.4968 7.26519 14.091C7.63979 13.6851 8.27245 13.6598 8.67827 14.0344L10.5 15.716L10.5 6C10.5 5.44772 10.9477 5 11.5 5C12.0523 5 12.5 5.44771 12.5 6L12.5 15.716L14.3217 14.0344C14.7275 13.6598 15.3602 13.6851 15.7348 14.0909Z'
        fill={props.fill ? props.fill : '#808191'}
      />
    </svg>
  )
}

export const IconArrowRight = (props: IconType) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z'
        fill={props.fill ? props.fill : 'white'}
      />
    </svg>
  )
}

export const IconEnter = (props: any) => {
  return (
    <svg
      width={props.size ? props.size : '20'}
      height={props.size ? props.size : '20'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 8V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V16M6 12H13M13 12L10.5 9.77778M13 12L10.5 14.2222'
        stroke='#9CA3AF'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillRule='evenodd'
        clipRule='evenodd'
        // fill={props.fill ? props.fill : 'white'}
      />
    </svg>
  )
}

export const IconArrowLeft = (props: IconType) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.90906 16.7348C9.50324 17.1094 8.87058 17.0841 8.49597 16.6783L5.2652 13.1783C4.9116 12.7953 4.9116 12.2048 5.26519 11.8218L8.49597 8.32172C8.87057 7.91589 9.50323 7.89059 9.90905 8.26519C10.3149 8.63979 10.3402 9.27245 9.96558 9.67827L8.28397 11.5L18 11.5C18.5523 11.5 19 11.9477 19 12.5C19 13.0523 18.5523 13.5 18 13.5L8.284 13.5L9.96557 15.3217C10.3402 15.7275 10.3149 16.3602 9.90906 16.7348Z'
        fill={props.fill ? props.fill : 'white'}
      />
    </svg>
  )
}

export const IconOptionLeft = (props: IconType) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 16C1.44772 16 1 16.4477 1 17C1 17.5523 1.44772 18 2 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H2ZM19 16C18.4477 16 18 16.4477 18 17C18 17.5523 18.4477 18 19 18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H19Z'
        fill='#808191'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16 21C18.2091 21 20 19.2091 20 17C20 14.7909 18.2091 13 16 13C13.7909 13 12 14.7909 12 17C12 19.2091 13.7909 21 16 21Z'
        fill='#808191'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 6C1.44772 6 1 6.44772 1 7C1 7.55228 1.44772 8 2 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H2ZM11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H22C22.5523 8 23 7.55228 23 7C23 6.44772 22.5523 6 22 6H11Z'
        fill='#808191'
      />
      <path
        d='M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z'
        fill={props.fill ? props.fill : '#808191'}
      />
    </svg>
  )
}

export const CustomTokenIcon = (props: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size ? props.size + 'px' : '24px'}
      height={props.size ? props.size + 'px' : '24px'}
      viewBox='0 0 24 24'
      fill='none'
      stroke='#9CA3AF'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='sc-fZwumE evMpaO'
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
      <line x1='12' y1='17' x2='12.01' y2='17' />
    </svg>
  )
}

export const SearchIcon = (props: any) => {
  return (
    <svg
      width={props.size ? props.size : '20'}
      height={props.size ? props.size : '20'}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.4215 13.6C11.2925 14.4775 9.87401 15.0001 8.33342 15.0001C4.65152 15.0001 1.66675 12.0153 1.66675 8.33342C1.66675 4.65152 4.65152 1.66675 8.33342 1.66675C12.0153 1.66675 15.0001 4.65152 15.0001 8.33342C15.0001 9.87401 14.4775 11.2925 13.6 12.4215L18.0893 16.9108C18.4148 17.2363 18.4148 17.7639 18.0893 18.0893C17.7639 18.4148 17.2363 18.4148 16.9108 18.0893L12.4215 13.6ZM13.3334 8.33342C13.3334 11.0948 11.0948 13.3334 8.33342 13.3334C5.57199 13.3334 3.33341 11.0948 3.33341 8.33342C3.33341 5.57199 5.57199 3.33341 8.33342 3.33341C11.0948 3.33341 13.3334 5.57199 13.3334 8.33342Z'
        fill='#808191'
      />
    </svg>
  )
}

export const SettingIcon = (props: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size ? props.size : '24'}
      height={props.size ? props.size : '24'}
      viewBox='0 0 16 16'
      {...props}
    >
      <g id='ic_settings_16' transform='translate(-494.25 -372.25)'>
        <rect
          id='Rectangle_486'
          data-name='Rectangle 486'
          width='16'
          height='16'
          transform='translate(494.25 372.25)'
          fill='rgba(255,255,255,0)'
        />
        <path
          id='Path_4419'
          data-name='Path 4419'
          d='M6.788-3.61a.68.68,0,0,0-.338-.585l-.9-.519q.026-.267.026-.536t-.026-.536l.9-.519a.68.68,0,0,0,.338-.585c0-.582-1.349-3.5-2.311-3.5a.666.666,0,0,0-.338.092l-.9.519a5.333,5.333,0,0,0-.932-.54v-1.037a.673.673,0,0,0-.5-.653A7.016,7.016,0,0,0,0-12.25a7.046,7.046,0,0,0-1.808.236.673.673,0,0,0-.5.653v1.037a5.333,5.333,0,0,0-.932.54l-.9-.519a.666.666,0,0,0-.338-.092h0c-.888,0-2.311,2.782-2.311,3.5a.68.68,0,0,0,.338.585l.9.519q-.026.267-.026.536t.026.536l-.9.519a.68.68,0,0,0-.338.585c0,.582,1.349,3.5,2.311,3.5A.666.666,0,0,0-4.132-.2l.9-.519a5.333,5.333,0,0,0,.932.54V.862a.673.673,0,0,0,.5.653A7.017,7.017,0,0,0,0,1.75,7.046,7.046,0,0,0,1.81,1.514a.673.673,0,0,0,.5-.653V-.176a5.333,5.333,0,0,0,.932-.54l.9.519a.666.666,0,0,0,.338.092C5.365-.105,6.788-2.887,6.788-3.61ZM4.358-1.587,3.164-2.278A7.4,7.4,0,0,1,1-1.023V.351A5.746,5.746,0,0,1,0,.438,5.714,5.714,0,0,1-.992.351V-1.023A7.393,7.393,0,0,1-3.157-2.278l-1.193.691a5.671,5.671,0,0,1-1-1.726L-4.154-4c-.069-.7-.1-.975-.1-1.249s.035-.549.1-1.251l-1.192-.687a5.663,5.663,0,0,1,1-1.726l1.194.691A7.4,7.4,0,0,1-.992-9.477v-1.374a5.747,5.747,0,0,1,1-.087A5.714,5.714,0,0,1,1-10.851v1.374A7.393,7.393,0,0,1,3.164-8.222l1.193-.691a5.672,5.672,0,0,1,1,1.726L4.161-6.5c.069.7.1.975.1,1.249S4.231-4.7,4.161-4l1.192.687A5.663,5.663,0,0,1,4.358-1.587ZM0-7.875A2.63,2.63,0,0,0-2.621-5.25,2.63,2.63,0,0,0,0-2.625,2.63,2.63,0,0,0,2.629-5.25,2.63,2.63,0,0,0,0-7.875ZM0-3.937A1.314,1.314,0,0,1-1.309-5.25,1.314,1.314,0,0,1,0-6.562,1.314,1.314,0,0,1,1.316-5.25,1.314,1.314,0,0,1,0-3.937Z'
          transform='translate(502.25 385.25)'
          fill='#a0a3c4'
        />
      </g>
    </svg>
  )
}

export const ReloadIcon = (props: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={props.color ? props.color : 'white'}
      width={props.size ? props.size : '24'}
      height={props.size ? props.size : '24'}
      version='1.1'
      id='Layer_1'
      viewBox='0 0 400 400'
    >
      <path d='M336.554,86.871c-11.975-18.584-27.145-34.707-44.706-47.731L330.801,0H217.436v113.91L270.4,60.691  c40.142,28.131,65.042,74.724,65.042,124.571c0,83.744-68.13,151.874-151.874,151.874S31.694,269.005,31.694,185.262  c0-58.641,32.781-111.009,85.551-136.669l-13.119-26.979C73.885,36.318,48.315,59.1,30.182,87.494  c-18.637,29.184-28.488,62.991-28.488,97.768c0,100.286,81.588,181.874,181.874,181.874s181.874-81.588,181.874-181.874  C365.442,150.223,355.453,116.201,336.554,86.871z' />
    </svg>
  )
}

export const CloseModalIcon = (props: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={props.color ? props.color : 'white'}
      width={props.size ? props.size : '24'}
      height={props.size ? props.size : '24'}
      viewBox='0 0 24 24'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
    </svg>
  )
}
export const SharedIcon = (props: any) => {
  return (
    <svg {...props} fill='white' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
      <path d='M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z'/></svg>
  )
}

export const CopyIcon = (props: any) => {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' fill='white' height='1em' viewBox='0 0 448 512'>
      <path d='M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z'/></svg>
  )
}

export const TwitterIcon = (props: any) => {
  return (
    <svg {...props} fill='white' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
      <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'/></svg>
  )
}

export const DownloadIcon = (props: any) => {
  return (
    <svg {...props} fill='white'xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'><path d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'/></svg>
  )
}

export const DerivableIcon = (props: any) => {
  return (
    <svg
      width='180'
      height='34'
      viewBox='0 0 180 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M52.7825 28.3943H40.1699V7.18227H52.7825V11.7816H45.9095V15.1187H52.2739V19.718H45.9095V23.7224H52.7825V28.3943Z'
        fill='#F2F2F2'
      />
      <path
        d='M63.4625 7.18227C65.3902 7.18227 66.9935 7.41925 68.2722 7.89321C69.5508 8.35749 70.5099 9.05392 71.1492 9.98249C71.7983 10.9111 72.1228 12.0669 72.1228 13.4501C72.1228 14.311 71.9775 15.0945 71.6868 15.8006C71.3962 16.5067 70.9797 17.1402 70.4372 17.7012C69.9044 18.2526 69.2651 18.7362 68.5192 19.1521L74.7092 28.3943H68.1995L63.695 20.6756H62.2419V28.3943H56.5023V7.18227H63.4625ZM63.3753 11.5204H62.2419V16.3664H63.3172C64.1987 16.3664 64.9204 16.173 65.4823 15.7861C66.0441 15.3992 66.325 14.7076 66.325 13.7113C66.325 13.0245 66.0926 12.4877 65.6276 12.1008C65.1626 11.7139 64.4118 11.5204 63.3753 11.5204Z'
        fill='#F2F2F2'
      />
      <path
        d='M76.6418 28.3943V7.18227H82.4104V28.3943H76.6418Z'
        fill='#F2F2F2'
      />
      <path
        d='M105.369 7.18227L98.4087 28.3943H91.6519L84.7208 7.18227H91.1724L94.064 17.9334C94.1706 18.3396 94.2917 18.862 94.4273 19.5003C94.5726 20.1291 94.7034 20.7578 94.8196 21.3865C94.9455 22.0152 95.023 22.5279 95.0521 22.9245C95.0908 22.5279 95.1635 22.0201 95.2701 21.401C95.3766 20.782 95.4929 20.1629 95.6188 19.5439C95.7544 18.9152 95.8803 18.3977 95.9966 17.9914L98.9463 7.18227H105.369Z'
        fill='#F2F2F2'
      />
      <path
        d='M120.713 28.3943L119.667 24.4189H112.765L111.69 28.3943H105.383L112.314 7.09521H119.972L126.99 28.3943H120.713ZM118.475 19.718L117.56 16.2358C117.463 15.8586 117.323 15.3218 117.139 14.6253C116.955 13.9192 116.771 13.1938 116.586 12.449C116.412 11.6945 116.276 11.0755 116.18 10.5919C116.092 11.0755 115.967 11.6752 115.802 12.391C115.647 13.0971 115.482 13.7983 115.308 14.4948C115.143 15.1912 114.998 15.7716 114.872 16.2358L113.956 19.718H118.475Z'
        fill='#F2F2F2'
      />
      <path
        d='M129.301 7.18227H136.711C139.782 7.18227 141.971 7.63688 143.279 8.54611C144.587 9.45533 145.241 10.7611 145.241 12.4635C145.241 13.3921 145.071 14.1804 144.732 14.8285C144.403 15.4765 143.982 15.9892 143.468 16.3664C142.964 16.7437 142.446 17 141.913 17.1354V17.2805C142.495 17.4256 143.071 17.6674 143.643 18.0059C144.224 18.3348 144.703 18.8329 145.081 19.5003C145.469 20.1581 145.662 21.0528 145.662 22.1845C145.662 23.471 145.333 24.5785 144.674 25.507C144.025 26.4356 143.095 27.1514 141.884 27.6544C140.673 28.1477 139.235 28.3943 137.569 28.3943H129.301V7.18227ZM135.04 15.3218H136.77C137.719 15.3218 138.387 15.1283 138.775 14.7414C139.162 14.3448 139.356 13.866 139.356 13.305C139.356 12.7247 139.133 12.2846 138.688 11.9847C138.252 11.6752 137.574 11.5204 136.653 11.5204H135.04V15.3218ZM135.04 19.5149V23.9691H137.06C138.058 23.9691 138.755 23.7563 139.153 23.3307C139.55 22.8954 139.748 22.3538 139.748 21.7057C139.748 21.3285 139.661 20.9754 139.487 20.6466C139.322 20.308 139.036 20.0372 138.629 19.8341C138.223 19.6213 137.661 19.5149 136.944 19.5149H135.04Z'
        fill='#F2F2F2'
      />
      <path
        d='M149.353 28.3943V7.18227H155.093V23.766H163.273V28.3943H149.353Z'
        fill='#F2F2F2'
      />
      <path
        d='M179.286 28.3943H166.674V7.18227H179.286V11.7816H172.413V15.1187H178.778V19.718H172.413V23.7224H179.286V28.3943Z'
        fill='#F2F2F2'
      />
      <path
        d='M19.8214 26.3968V33H1V1H20.7863C33.7667 3.03175 36.0648 12.6825 35.5913 17.254H28.9783C29.1478 16.2381 28.9783 13.5968 26.9435 11.1587C24.9087 8.72064 21.9909 7.91375 20.7863 7.81507H7.75016V26.3968H19.8214Z'
        fill='#105EFB'
        stroke='black'
        strokeWidth='0.01'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.2266 13.1904H21.857V19.0892L25.7983 22.3333H35.5919V33H24.4006V24.3328L20.1201 20.8095H14.2266V13.1904Z'
        fill='white'
      />
      <path
        d='M19.8214 26.3968V33H1V1H20.7863C33.7667 3.03175 36.0648 12.6825 35.5913 17.254H28.9783C29.1478 16.2381 28.9783 13.5968 26.9435 11.1587C24.9087 8.72064 21.9909 7.91375 20.7863 7.81507H7.75016V26.3968H19.8214Z'
        fill='#01A7FA'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.2266 13.1904H21.857V19.0892L25.7983 22.3333H35.5919V33H24.4006V24.3328L20.1201 20.8095H14.2266V13.1904Z'
        fill='#F2F2F2'
      />
    </svg>
  )
}

export const DerivableIconSmall = (props: any) => {
  return (
    <svg {...props} viewBox='0 0 309 213' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M158.352 109.076V137.204H78.2988V0.893494H162.457C217.666 9.54811 227.441 50.6575 225.427 70.1304H197.3C198.021 65.8031 197.3 54.5521 188.645 44.1666C179.991 33.781 167.58 30.344 162.457 29.9236H107.01V109.076H158.352Z' fill='#01A7FA'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M134.554 52.8212H167.009V77.9482L183.772 91.7669H225.427V137.204H177.827V100.284L159.621 85.276H134.554V52.8212Z' fill='#F2F2F2'/>
      <path d='M35.0418 191.71C35.0418 196.444 34.1599 200.381 32.3961 203.518C30.6322 206.656 28.1443 209.014 24.9323 210.592C21.7389 212.152 17.9792 212.932 13.6532 212.932H0.480225V172.215H14.5722C18.9539 172.215 22.6672 172.967 25.7121 174.471C28.757 175.975 31.0685 178.175 32.6467 181.071C34.2434 183.968 35.0418 187.514 35.0418 191.71ZM23.6234 192.1C23.6234 189.631 23.2892 187.588 22.6208 185.973C21.971 184.339 20.9869 183.123 19.6687 182.325C18.3505 181.508 16.6888 181.099 14.6836 181.099H11.4809V203.908H13.9317C17.2736 203.908 19.7244 202.943 21.284 201.012C22.8436 199.062 23.6234 196.092 23.6234 192.1Z' fill='#F2F2F2'/>
      <path d='M66.5399 212.932H42.3663V172.215H66.5399V181.044H53.3669V187.449H65.5651V196.277H53.3669V203.964H66.5399V212.932Z' fill='#F2F2F2'/>
      <path d='M87.0095 172.215C90.7042 172.215 93.7769 172.67 96.2277 173.58C98.6785 174.471 100.517 175.808 101.742 177.59C102.986 179.373 103.608 181.591 103.608 184.246C103.608 185.899 103.329 187.403 102.772 188.758C102.215 190.113 101.417 191.329 100.377 192.406C99.3562 193.465 98.1308 194.393 96.7012 195.191L108.565 212.932H96.0885L87.455 198.115H84.6701V212.932H73.6694V172.215H87.0095ZM86.8423 180.542H84.6701V189.844H86.7309C88.4205 189.844 89.8037 189.473 90.8806 188.73C91.9574 187.987 92.4958 186.66 92.4958 184.748C92.4958 183.429 92.0503 182.399 91.1591 181.656C90.2679 180.914 88.829 180.542 86.8423 180.542Z' fill='#F2F2F2'/>
      <path d='M112.269 212.932V172.215H123.326V212.932H112.269Z' fill='#F2F2F2'/>
      <path d='M167.328 172.215L153.988 212.932H141.038L127.754 172.215H140.119L145.661 192.852C145.865 193.632 146.097 194.634 146.357 195.86C146.636 197.066 146.886 198.273 147.109 199.48C147.351 200.687 147.499 201.671 147.555 202.432C147.629 201.671 147.768 200.696 147.973 199.508C148.177 198.32 148.4 197.131 148.641 195.943C148.901 194.736 149.142 193.743 149.365 192.963L155.019 172.215H167.328Z' fill='#F2F2F2'/>
      <path d='M196.738 212.932L194.732 205.301H181.504L179.443 212.932H167.356L180.64 172.048H195.317L208.769 212.932H196.738ZM192.449 196.277L190.694 189.593C190.508 188.869 190.239 187.839 189.886 186.502C189.534 185.147 189.181 183.754 188.828 182.325C188.494 180.876 188.234 179.688 188.048 178.76C187.881 179.688 187.64 180.839 187.324 182.213C187.027 183.569 186.712 184.915 186.377 186.251C186.062 187.588 185.783 188.702 185.542 189.593L183.787 196.277H192.449Z' fill='#F2F2F2'/>
      <path d='M213.197 172.215H227.4C233.286 172.215 237.482 173.088 239.988 174.833C242.495 176.578 243.748 179.085 243.748 182.353C243.748 184.135 243.423 185.648 242.773 186.892C242.142 188.136 241.334 189.12 240.35 189.844C239.385 190.568 238.391 191.06 237.37 191.32V191.599C238.484 191.877 239.589 192.341 240.684 192.991C241.798 193.622 242.717 194.579 243.442 195.86C244.184 197.122 244.556 198.84 244.556 201.012C244.556 203.481 243.924 205.607 242.662 207.389C241.418 209.172 239.635 210.546 237.315 211.511C234.994 212.458 232.237 212.932 229.043 212.932H213.197V172.215ZM224.197 187.839H227.512C229.331 187.839 230.612 187.468 231.355 186.725C232.097 185.964 232.469 185.045 232.469 183.968C232.469 182.854 232.042 182.009 231.188 181.433C230.352 180.839 229.053 180.542 227.289 180.542H224.197V187.839ZM224.197 195.887V204.437H228.068C229.981 204.437 231.318 204.029 232.079 203.212C232.84 202.376 233.221 201.337 233.221 200.093C233.221 199.369 233.054 198.691 232.719 198.06C232.404 197.41 231.856 196.89 231.076 196.5C230.296 196.092 229.22 195.887 227.846 195.887H224.197Z' fill='#F2F2F2'/>
      <path d='M251.629 212.932V172.215H262.63V204.047H278.309V212.932H251.629Z' fill='#F2F2F2'/>
      <path d='M309 212.932H284.826V172.215H309V181.044H295.827V187.449H308.025V196.277H295.827V203.964H309V212.932Z' fill='#F2F2F2'/>
    </svg>
  )
}
