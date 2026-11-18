<script>
import TableWidget from '@/components/table/TableWidget.vue'

export default {
  components: {
    TableWidget,
  },

  data() {
    return {
      styles: {
        Пара: 'pb-2 bg-transparent text-white-50',
        Цена: 'pb-2 bg-transparent text-end text-white-50',
        '24h Объем': 'pb-2 bg-transparent text-end text-white-50',
        'Тек. Объем': 'pb-2 bg-transparent text-end text-white-50',
        Действие: 'pb-2 bg-transparent text-end text-white-50',
      },

      pairs: [
        {
          Пара: {
            icon: '₿',
            iconClasses: 'bg-warning text-dark',
            value: 'BTC/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '65 100.00',
            classes: 'py-2 bg-transparent text-end text-success',
          },
          '24h Объем': {
            value: '1.24B$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '18.450',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'Ξ',
            iconClasses: 'bg-primary text-light',
            value: 'ETH/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '3 450.50',
            classes: 'py-2 bg-transparent text-end text-danger',
          },
          '24h Объем': {
            value: '840.2M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '142.100',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'S',
            iconClasses: 'bg-info text-dark',
            value: 'SOL/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '145.20',
            classes: 'py-2 bg-transparent text-end text-success',
          },
          '24h Объем': {
            value: '410.5M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '980.500',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'B',
            iconClasses: 'bg-warning text-dark',
            value: 'BNB/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '580.00',
            classes: 'py-2 bg-transparent text-end text-success',
          },
          '24h Объем': {
            value: '195.0M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '45.120',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'X',
            iconClasses: 'bg-secondary text-light',
            value: 'XRP/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '0.5820',
            classes: 'py-2 bg-transparent text-end text-danger',
          },
          '24h Объем': {
            value: '310.8M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '12 450.000',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'A',
            iconClasses: 'bg-primary text-light',
            value: 'ADA/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '0.3950',
            classes: 'py-2 bg-transparent text-end text-success',
          },
          '24h Объем': {
            value: '88.4M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '8 900.000',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'Ð',
            iconClasses: 'bg-warning text-dark',
            value: 'DOGE/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '0.1240',
            classes: 'py-2 bg-transparent text-end text-danger',
          },
          '24h Объем': {
            value: '150.3M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '35 120.000',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'A',
            iconClasses: 'bg-danger text-light',
            value: 'AVAX/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '26.80',
            classes: 'py-2 bg-transparent text-end text-success',
          },
          '24h Объем': {
            value: '72.1M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '310.450',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'L',
            iconClasses: 'bg-primary text-light',
            value: 'LINK/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '14.10',
            classes: 'py-2 bg-transparent text-end text-danger',
          },
          '24h Объем': {
            value: '95.6M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '540.000',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },

        {
          Пара: {
            icon: 'D',
            iconClasses: 'bg-info text-dark',
            value: 'DOT/USDT',
            classes: 'py-2 bg-transparent fw-bold text-light',
          },
          Цена: {
            value: '6.75',
            classes: 'py-2 bg-transparent text-end text-success',
          },
          '24h Объем': {
            value: '44.8M$',
            classes: 'py-2 bg-transparent text-end text-white-50',
          },
          'Тек. Объем': {
            value: '1 120.800',
            classes: 'py-2 bg-transparent text-end text-light',
          },
          Действие: {
            button: 'К торговле',
            buttonClasses: 'btn btn-success btn-sm fw-bold',
            classes: 'py-2 bg-transparent text-end',
          },
        },
      ],
    }
  },
}
</script>

<template>
  <main>
    <div class="container pt-3">
      <h4 class="mb-3 text-light">Все Пары</h4>

      <div class="bg-body-tertiary p-3 rounded-3 w-100">
        <div class="overflow-y-auto" style="max-height: 360px">
          <TableWidget
            :list="pairs"
            :styles="styles"
            table-classes="table table-borderless table-sm mb-0 table-hover"
          />
        </div>
      </div>
    </div>
  </main>
</template>
