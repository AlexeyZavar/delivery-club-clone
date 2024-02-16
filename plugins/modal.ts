import Vue from 'vue'
// @ts-ignore
import VModal from 'vue-js-modal'

Vue.use(VModal)

export default function (_: any, inject: (arg0: string, arg1: any) => void) {
  inject('modal', VModal)
}
