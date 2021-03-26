export default function Spinner() {
  return (
    <svg className={`motion-safe:animate-spin w-10 h-10`} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 500 500" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g fill="#aaa" transform="translate(151.625,1010.25)">
        <path d="m85.511-1010.2c-82.584,4.1917-154.6,48.523-196.98,113.89l85.781,49.607c24.978-35.605,65.228-59.679,111.23-62.677v-100.82c-0.01043,0.0005-0.02094-0.0006-0.03137,0z">
          <animate id="p1" attributeName="fill" attributeType="XML" from="#333" to="#aaa" dur="0.08s" fill="freeze" begin="0s; p6.end"/>
        </path>
        <path d="m111.14-1010.2,0,101.35c44.506,4.7575,83.092,29.309,106.83,64.687l90.205-52.152c-42.394-65.388-114.42-109.72-197.04-113.89z">
          <animate id="p2" attributeName="fill" attributeType="XML" from="#333" to="#aaa" dur="0.1s" fill="freeze" begin="p1.end"/>
        </path>
        <path d="m-124.33-874.18c-17.473,34.173-27.297,72.92-27.297,113.95,0,41.029,9.8236,79.745,27.297,113.92l86.973-50.298c-9.6635-19.671-15.092-41.818-15.092-65.221,0-22.43,4.9773-43.692,13.899-62.74l-85.781-49.607z">
          <animate id="p6" attributeName="fill" attributeType="XML" from="#333" to="#aaa" dur="0.2s" fill="freeze" begin="p5.end"/>
        </path>
        <path d="m321.05-874.18-90.675,52.403c8.12,18.323,12.644,38.606,12.644,59.943,0,22.317-4.9677,43.483-13.805,62.457l91.805,53.063c17.477-34.176,27.359-72.884,27.359-113.92,0-41.029-9.855-79.776-27.328-113.95z">
          <animate id="p3" attributeName="fill" attributeType="XML" from="#333" to="#aaa" dur="0.2s" fill="freeze" begin="p2.end"/>
        </path>
        <path d="m216.44-677.17c-23.852,34.163-61.743,57.738-105.3,62.394v104.52c82.625-4.1631,154.64-48.496,197.04-113.89l-91.742-53.032z">
          <animate id="p4" attributeName="fill" attributeType="XML" from="#333" to="#aaa" dur="0.08s" fill="freeze" begin="p3.end"/>
        </path>
        <path d="m-24.084-674.65-87.381,50.518c42.379,65.37,114.4,109.7,197,113.88v-103.99c-45.02-2.9339-84.548-26.05-109.63-60.415z">
          <animate id="p5" attributeName="fill" attributeType="XML" from="#333" to="#aaa" dur="0.1s" fill="freeze" begin="p4.end"/>
        </path>
      </g>
    </svg>
  )
}
