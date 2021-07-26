<template>
  <div>
    <div class="wrapper">
      <AddNewCost @onAddNewCost="addNewCostBtn" />
      <div class="fastLinkPayments">
        <a href="#" @click="setValue('payment', 'Food', 200)">Food/200</a>
        <a href="#" @click="setValue('payment', 'Transport', 50)">Transport/50</a>
        <a href="#" @click="setValue('payment', 'Restaurant', 2000)">Restaurant/2000</a>
      </div>
      <router-view> </router-view>
      <AddPaymentsForm
        @onAddNewPayment="addNewPaymentData"
        v-if="showPaymentForm"
        :categorylist="categoryList"
      />
      <PaymentsDisplay
        :itemsList="paymentsList"
        :rows="maxRowList"
        :page="PageNumber"
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
import { mapMutations } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentsForm from "./AddPaymentsForm.vue";
import AddNewCost from "../components/AddNewCost.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    AddPaymentsForm,
    AddNewCost,
    Pagination,
  },
  data() {
    return {
      visiblePaymentsList: [],
      showPaymentForm: false,
      PageNumber: 1,
      maxRowList: 10,
    };
  },
  computed: {
    maxPages: function() {
      return Math.trunc(this.paymentsList.length / this.maxRowList + 1);
    },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),

    addNewCostBtn(st) {
      console.log(st);
      this.showPaymentForm = st;
    },
    addNewPaymentData(data) {
      data.id = this.$store.getters.getPaymentList.length + 1;
      this.addDataToPaymentList(data);
    },
    showPage(p) {
      this.PageNumber = p;
    },
    setValue(page, category, value) {
      this.$router
        .push({
          name: page,
          params: {
            category,
            categorylist: this.categoryList,
            value,
          },
          // query: {
          //   value,
          // },
        })
        .catch(() => {
          console.log("fastlink duplicate");
        });
      // console.log(this.$router);
    },
  },
  mounted() {
    // this.PageNumber = Number(this.$route.params.page);
  },
};
</script>

<style>
.fastLinkPayments a {
  margin-right: 10px;
}
</style>
