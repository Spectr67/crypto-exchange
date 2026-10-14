<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container p-3">
    <h4 class="mb-3 text-light">Свечи</h4>
    <div
      class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 mb-3 p-2 bg-body-tertiary rounded border border-secondary border-opacity-25"
    >
      <div
        class="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 gap-sm-3"
      >
        <h4 class="h5 mb-0 font-monospace text-light fw-bold">BTC / USDT</h4>

        <div class="d-flex align-items-center gap-2">
          <span class="fs-6 font-monospace text-success fw-semibold"> $65,100.00 </span>

          <span class="badge text-bg-success"> +2.45% </span>
        </div>
      </div>
      <div class="btn-group btn-group-sm" role="group">
        <button type="button" class="btn btn-outline-secondary active">1m</button>
        <button type="button" class="btn btn-outline-secondary">15m</button>
        <button type="button" class="btn btn-outline-secondary">1H</button>
        <button type="button" class="btn btn-outline-secondary">4H</button>
        <button type="button" class="btn btn-outline-secondary">1D</button>
      </div>
    </div>
    <div class="row g-3">
      <div class="col-12 col-lg-8">
        <div class="card bg-body-tertiary border-secondary overflow-hidden p-2">
          <div
            class="d-flex justify-content-between align-items-center px-2 py-2 border-bottom border-secondary border-opacity-25"
          >
            <div>
              <div class="text-light fw-bold">K-Line</div>
              <div class="text-secondary small">BTC / USDT</div>
            </div>
            <div class="text-secondary small">Daily</div>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0 font-monospace">
              <thead>
                <tr>
                  <th scope="col" class="text-secondary fw-normal small ps-2">Time</th>
                  <th scope="col" class="text-secondary fw-normal small text-center">KLINE</th>
                  <th scope="col" class="text-secondary fw-normal small">Open</th>
                  <th scope="col" class="text-secondary fw-normal small">High</th>
                  <th scope="col" class="text-secondary fw-normal small">Low</th>
                  <th scope="col" class="text-secondary fw-normal small">Close</th>
                  <th scope="col" class="text-secondary fw-normal small">Change</th>
                </tr>
              </thead>
              <tbody id="kline-table">
                <tr>
                  <td class="ps-2 text-secondary small">25.08.2026</td>
                  <td class="text-center px-2">
                    <div class="kline position-relative mx-auto kline-up">
                      <div class="kline-wick top-0" style="top: 0px; height: 44px"></div>

                      <div
                        class="kline-body"
                        style="top: 13.2px; height: 17.599999999999998px"
                      ></div>
                    </div>
                  </td>
                  <td class="text-nowrap small font-monospace">63,800</td>
                  <td class="text-nowrap small font-monospace text-success">64,500</td>
                  <td class="text-nowrap small font-monospace text-danger">63,500</td>
                  <td class="text-nowrap small font-monospace fw-semibold">64,200</td>
                  <td class="text-nowrap small font-monospace text-success">+0.63%</td>
                </tr>

                <tr>
                  <td class="ps-2 text-secondary small">26.08.2026</td>
                  <td class="text-center px-2">
                    <div class="kline position-relative mx-auto kline-up">
                      <div class="kline-wick top-0" style="top: 0px; height: 44px"></div>

                      <div
                        class="kline-body"
                        style="top: 7.333333333333333px; height: 26.88888888888889px"
                      ></div>
                    </div>
                  </td>
                  <td class="text-nowrap small font-monospace">64,200</td>
                  <td class="text-nowrap small font-monospace text-success">64,900</td>
                  <td class="text-nowrap small font-monospace text-danger">64,000</td>
                  <td class="text-nowrap small font-monospace fw-semibold">64,750</td>
                  <td class="text-nowrap small font-monospace text-success">+0.86%</td>
                </tr>

                <tr>
                  <td class="ps-2 text-secondary small">27.08.2026</td>
                  <td class="text-center px-2">
                    <div class="kline position-relative mx-auto kline-down">
                      <div class="kline-wick top-0" style="top: 0px; height: 44px"></div>

                      <div class="kline-body" style="top: 30.25px; height: 24.75px"></div>
                    </div>
                  </td>
                  <td class="text-nowrap small font-monospace">64,750</td>
                  <td class="text-nowrap small font-monospace text-success">65,300</td>
                  <td class="text-nowrap small font-monospace text-danger">64,500</td>
                  <td class="text-nowrap small font-monospace fw-semibold">64,300</td>
                  <td class="text-nowrap small font-monospace text-danger">-0.69%</td>
                </tr>

                <tr>
                  <td class="ps-2 text-secondary small">28.08.2026</td>
                  <td class="text-center px-2">
                    <div class="kline position-relative mx-auto kline-up">
                      <div class="kline-wick top-0" style="top: 0px; height: 44px"></div>

                      <div
                        class="kline-body"
                        style="top: 9.777777777777777px; height: 14.66666666666667px"
                      ></div>
                    </div>
                  </td>
                  <td class="text-nowrap small font-monospace">64,300</td>
                  <td class="text-nowrap small font-monospace text-success">64,800</td>
                  <td class="text-nowrap small font-monospace text-danger">63,900</td>
                  <td class="text-nowrap small font-monospace fw-semibold">64,600</td>
                  <td class="text-nowrap small font-monospace text-success">+0.47%</td>
                </tr>

                <tr>
                  <td class="ps-2 text-secondary small">29.08.2026</td>
                  <td class="text-center px-2">
                    <div class="kline position-relative mx-auto kline-up">
                      <div class="kline-wick top-0" style="top: 0px; height: 44px"></div>

                      <div
                        class="kline-body"
                        style="top: 13.2px; height: 22.000000000000004px"
                      ></div>
                    </div>
                  </td>
                  <td class="text-nowrap small font-monospace">64,600</td>
                  <td class="text-nowrap small font-monospace text-success">65,400</td>
                  <td class="text-nowrap small font-monospace text-danger">64,400</td>
                  <td class="text-nowrap small font-monospace fw-semibold">65,100</td>
                  <td class="text-nowrap small font-monospace text-success">+0.77%</td>
                </tr>

                <tr>
                  <td class="ps-2 text-secondary small">30.08.2026</td>
                  <td class="text-center px-2">
                    <div class="kline position-relative mx-auto kline-up">
                      <div class="kline-wick top-0" style="top: 0px; height: 44px"></div>

                      <div class="kline-body" style="top: 22px; height: 12.222222222222221px"></div>
                    </div>
                  </td>
                  <td class="text-nowrap small font-monospace">65,100</td>
                  <td class="text-nowrap small font-monospace text-success">65,800</td>
                  <td class="text-nowrap small font-monospace text-danger">64,900</td>
                  <td class="text-nowrap small font-monospace fw-semibold">65,350</td>
                  <td class="text-nowrap small font-monospace text-success">+0.38%</td>
                </tr>

                <tr>
                  <td class="ps-2 text-secondary small">31.08.2026</td>
                  <td class="text-center px-2">
                    <div class="kline position-relative mx-auto kline-down">
                      <div class="kline-wick top-0" style="top: 0px; height: 44px"></div>

                      <div class="kline-body" style="top: 13.75px; height: 13.75px"></div>
                    </div>
                  </td>
                  <td class="text-nowrap small font-monospace">65,350</td>
                  <td class="text-nowrap small font-monospace text-success">65,600</td>
                  <td class="text-nowrap small font-monospace text-danger">64,800</td>
                  <td class="text-nowrap small font-monospace fw-semibold">65,100</td>
                  <td class="text-nowrap small font-monospace text-danger">-0.38%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
