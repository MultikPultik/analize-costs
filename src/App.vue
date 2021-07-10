<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>Мои персональные расходы</h1>
    </div>
    <div class="wrapper">
      <AddNewCost @onAddNewCost="addNewCostBtn" />
      <AddPaymentsForm
        @onAddNewPayment="addNewPaymentData"
        v-if="showPaymentForm"
      />
      <PaymentsDisplay
        :itemsList="paymentsList"
        :rows="maxRowList"
        :page="showPageNumber"
      />
      <Pagination
        :records="paymentsList"
        :pages="maxPages"
        @onPagePagination="showPage"
      />
    </div>
  </div>
</template>

<script>
import mapMutations from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentsForm from "@/components/AddPaymentsForm.vue";
import AddNewCost from "@/components/AddNewCost.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentsForm,
    AddNewCost,
    Pagination,
  },
  data() {
    return {
      paymentsList: [],
      visiblePaymentsList: [],
      showPaymentForm: false,
      showPageNumber: 1,
      maxRowList: 5,
    };
  },
  computed: {
    maxPages: function() {
      return Math.trunc(this.paymentsList.length / this.maxRowList + 1);
    },
  },
  methods: {
    ...mapMutations(['setPaymentsListData']),

    addNewCostBtn(st) {
      console.log(st);
      this.showPaymentForm = st;
    },
    addNewPaymentData(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    showPage(p) {
      this.showPageNumber = p;
    },

    fetchData() {
      return [
        {
          date: "12.03.2020",
          category: "Food",
          value: 180,
        },
        {
          date: "15.05.2020",
          category: "Clothes",
          value: 80,
        },
        {
          date: "12.08.2020",
          category: "Computer",
          value: 280,
        },
        {
          date: "12.08.2020",
          category: "Computer2",
          value: 280,
        },
        {
          date: "12.08.2020",
          category: "Computer3",
          value: 280,
        },
        {
          date: "12.08.2020",
          category: "Computer4",
          value: 280,
        },
        {
          date: "12.08.2020",
          category: "Computer5",
          value: 280,
        },
        {
          date: "12.08.2020",
          category: "Computer6",
          value: 280,
        },
      ];
    },
  },
  created() {
    // this.paymentsList = this.fetchData();
    // this.$store.commit("setPaymentsListData", this.fetchData());
    this.setPaymenstListData(this.fetchData());
    // this.updatePayments(this.fetchData);
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
}
</style>

<style lang="scss" scoped module>
.header {
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-bottom: 70px;
}
</style>
