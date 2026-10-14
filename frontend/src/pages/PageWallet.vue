<script></script>

<template>
  <div class="container pt-3">
    <h4 class="mb-3 text-light">Кошелёк</h4>
    <div
      class="p-3 p-md-4 mb-4 bg-body-tertiary rounded border border-secondary border-opacity-25 overflow-hidden"
    >
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3"
      >
        <div>
          <div class="text-body-secondary small mb-1">Приблизительный баланс:</div>

          <div class="fs-3 fw-bold text-success text-nowrap">
            3,000.00 <span class="fs-5">USDT</span>
          </div>

          <div class="text-body-secondary small">≈ $3,000.00 USD</div>
        </div>

        <div class="d-flex flex-column flex-sm-row gap-2 w-100 w-md-auto">
          <button type="button" class="btn btn-success px-4">↓ Депозит</button>

          <button type="button" class="btn btn-outline-success px-4">↑ Вывод</button>
        </div>
      </div>
    </div>

    <div class="p-3 bg-body-secondary rounded overflow-hidden">
      <table class="table table-dark table-striped table-hover table-sm align-middle mb-0">
        <thead class="bg-body-tertiary">
          <tr>
            <th scope="col" class="py-2">Токен</th>

            <th scope="col" class="py-2">Всего</th>

            <th scope="col" class="py-2 d-none d-md-table-cell">Доступно</th>

            <th scope="col" class="py-2 d-none d-md-table-cell">В ордерах</th>

            <th scope="col" class="py-2 text-end">Действия</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div class="d-flex flex-column flex-sm-row gap-1 gap-sm-2">
                <span class="fw-bold"> USDT </span>

                <span class="text-body-secondary small"> Tether </span>
              </div>
            </td>

            <td class="fw-semibold text-nowrap">1,500.00</td>

            <td class="text-success d-none d-md-table-cell text-nowrap">1,000.00</td>

            <td class="text-body-secondary d-none d-md-table-cell text-nowrap">500.00</td>

            <td class="text-end">
              <div class="d-flex flex-column flex-sm-row gap-1 justify-content-end">
                <button type="button" class="btn btn-success btn-sm">Депозит</button>

                <button type="button" class="btn btn-outline-success btn-sm">Вывод</button>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="d-flex flex-column flex-sm-row gap-1 gap-sm-2">
                <span class="fw-bold"> BTC </span>

                <span class="text-body-secondary small"> Bitcoin </span>
              </div>
            </td>

            <td class="fw-semibold text-nowrap">0.015</td>

            <td class="text-success d-none d-md-table-cell text-nowrap">0.010</td>

            <td class="text-body-secondary d-none d-md-table-cell text-nowrap">0.005</td>

            <td class="text-end">
              <div class="d-flex flex-column flex-sm-row gap-1 justify-content-end">
                <button type="button" class="btn btn-success btn-sm">Депозит</button>

                <button type="button" class="btn btn-outline-success btn-sm">Вывод</button>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="d-flex flex-column flex-sm-row gap-1 gap-sm-2">
                <span class="fw-bold"> ETH </span>

                <span class="text-body-secondary small"> Ethereum </span>
              </div>
            </td>

            <td class="fw-semibold text-nowrap">0.25</td>

            <td class="text-success d-none d-md-table-cell text-nowrap">0.25</td>

            <td class="text-body-secondary d-none d-md-table-cell text-nowrap">0.00</td>

            <td class="text-end">
              <div class="d-flex flex-column flex-sm-row gap-1 justify-content-end">
                <button type="button" class="btn btn-success btn-sm">Депозит</button>

                <button type="button" class="btn btn-outline-success btn-sm">Вывод</button>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="d-flex flex-column flex-sm-row gap-1 gap-sm-2">
                <span class="fw-bold"> SOL </span>

                <span class="text-body-secondary small"> Solana </span>
              </div>
            </td>

            <td class="fw-semibold text-nowrap">3.50</td>

            <td class="text-success d-none d-md-table-cell text-nowrap">2.00</td>

            <td class="text-body-secondary d-none d-md-table-cell text-nowrap">1.50</td>

            <td class="text-end">
              <div class="d-flex flex-column flex-sm-row gap-1 justify-content-end">
                <button type="button" class="btn btn-success btn-sm">Депозит</button>

                <button type="button" class="btn btn-outline-success btn-sm">Вывод</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
