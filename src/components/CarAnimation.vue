<template>
  <svg viewBox="0 0 1402 265.15">
    <title>01</title>
    <g id="Road">
      <rect height="50px" class="cls-1" y="135.15" width="1402" />
    </g>

    <g id="Car">
      <g id="carbody">
        <path
          class="cls-4"
          d="M1173,354.35H1285.6a36.35,36.35,0,0,1,30.7,20.47l10.23,20.47s10.23,20.47,10.23,61.4c0,0,10.23,10.23,10.23,20.47,0,0,0,30.7-10.23,30.7H1050.23S1040,497.62,1040,456.68c0,0,10.23-40.93,61.4-40.93C1101.4,415.75,1132.1,364.58,1173,354.35Z"
          transform="translate(0 -354.35)"
        />
        <path
          class="cls-5"
          d="M1123.38,417.57v73h84.8s14.21-9.95,12.32-73"
          transform="translate(0 -354.35)"
        />
        <path
          class="cls-6"
          d="M1149.26,507.85c0-.27,0-.55,0-.82a46.05,46.05,0,0,0-92.1,0c0,.28,0,.55,0,.82Z"
          transform="translate(0 -354.35)"
        />
        <path
          d="M1143.23,507.85c0-.27,0-.55,0-.82a40,40,0,0,0-80,0c0,.28,0,.55,0,.82Z"
          transform="translate(0 -354.35)"
        />
        <path
          class="cls-6"
          d="M1334.92,507.85c0-.27,0-.55,0-.82a46.05,46.05,0,0,0-92.1,0c0,.28,0,.55,0,.82Z"
          transform="translate(0 -354.35)"
        />
        <path
          d="M1328.89,507.85c0-.27,0-.55,0-.82a40,40,0,0,0-80,0c0,.28,0,.55,0,.82Z"
          transform="translate(0 -354.35)"
        />
      </g>

      <g class="wheel">
        <circle class="cls-7" cx="1102.76" cy="153.72" r="32.89" />
        <circle class="cls-8" cx="1102.76" cy="153.72" r="19.9" />
        <circle class="cls-9" cx="1102.76" cy="153.72" r="11.94" />
        <path
          class="cls-9"
          d="M1119.59,486.5a20,20,0,0,1,7.58,16.58S1123.86,490.76,1119.59,486.5Z"
          transform="translate(0 -354.35)"
        />
      </g>

      <g class="wheel">
        <circle class="cls-7" cx="1289.89" cy="153.72" r="32.89" />
        <circle class="cls-8" cx="1289.89" cy="153.72" r="19.9" />
        <circle class="cls-9" cx="1289.89" cy="153.72" r="11.94" />
        <path
          class="cls-9"
          d="M1306.73,486.5a20,20,0,0,1,7.58,16.58S1311,490.76,1306.73,486.5Z"
          transform="translate(0 -354.35)"
        />
      </g>

      <path
        class="cls-10"
        d="M1285.88,359.29l11.84,34.58s.95,10.9-8.05,14.21l-64,9.48V359.29Z"
        transform="translate(0 -354.35)"
      />
      <path
        class="cls-10"
        d="M1220.5,359.29v58.27h-95.7L1113.43,409s33.64-45,56.38-49.75Z"
        transform="translate(0 -354.35)"
      />
      <path
        class="cls-11"
        d="M1107.75,415.2s4.26-13.27,28-9.95C1135.7,405.25,1148,439.83,1107.75,415.2Z"
        transform="translate(0 -354.35)"
      />
      <path
        class="cls-12"
        d="M1060.62,427.85s11-.15,17.51,3.9a7,7,0,0,1-1.32,12.38c-5.52,2.09-15.39,3.83-31.44.53C1045.37,444.66,1052.35,432.92,1060.62,427.85Z"
        transform="translate(0 -354.35)"
      />
      <path
        class="cls-13"
        d="M1332.91,416.15s-10.2,22.73,3.84,37.89A198.6,198.6,0,0,0,1332.91,416.15Z"
        transform="translate(0 -354.35)"
      />
    </g>
  </svg>
</template>

<style>
.cls-1 {
  fill: #ccc;
}
.cls-2,
.cls-3,
.cls-5 {
  fill: none;
  stroke-miterlimit: 10;
}
.cls-2,
.cls-3 {
  stroke: #f9d53d;
  stroke-width: 3.99px;
}
.cls-3 {
  stroke-dasharray: 24.18 24.18;
}
.cls-4 {
  fill:  #34D399;
}
.cls-5 {
  stroke: #000;
  stroke-width: 0.95px;
  opacity: 0.3;
}
.cls-6 {
  fill: #ddffc9;
}
.cls-7 {
  fill: #333;
}
.cls-8 {
  fill: #666;
}
.cls-9 {
  fill: #e6e6e6;
}
.cls-10 {
  fill: #1b1464;
}
.cls-11 {
  fill: #f2f2f2;
}
.cls-12 {
  fill: #b3b3b3;
}
.cls-13 {
  fill: #d83d49;
}

body {margin: 0; padding: 0;}
@keyframes rotate {
  100% {transform: rotate(-360deg);}
}
@keyframes movecar {
  0% {transform: translateX(300px);}
  100% {transform: translateX(-1600px);}
}
@keyframes carjitter {
  33% {transform: rotate(1deg);}
  66% {transform: rotate(1deg);}
}
.wheel, #Car, #carbody {
  transform-origin: 50% 50%; transform-box: fill-box;
}
.wheel {
  animation: rotate 2s linear infinite;
}
#Car {
  animation: movecar 10s linear infinite;
}
#carbody {
  animation: carjitter .25s linear infinite;
}
#road {
  height: 10px;
}
</style>
