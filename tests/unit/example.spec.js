import { shallowMount } from "@vue/test-utils";
import home from "@/views/Home.vue";

describe("home.vue", () => {
  it("測試計算機1", async () => {
    const no = "5.9";
    const wrapper = shallowMount(home);
    // 0012 * 3.24 = 
    await wrapper.find('.button-container #zero').trigger('click')
    await wrapper.find('.button-container #zero').trigger('click')
    await wrapper.find('.button-container #one').trigger('click')
    await wrapper.find('.button-container #two').trigger('click')
    await wrapper.find('.button-container #times').trigger('click')
    await wrapper.find('.button-container #three').trigger('click')
    await wrapper.find('.button-container #dot').trigger('click')
    await wrapper.find('.button-container #two').trigger('click')
    await wrapper.find('.button-container #four').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    // -0.38 = 
    await wrapper.find('.button-container #minus').trigger('click')
    await wrapper.find('.button-container #zero').trigger('click')
    await wrapper.find('.button-container #dot').trigger('click')
    await wrapper.find('.button-container #three').trigger('click')
    await wrapper.find('.button-container #eight').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    // +0.5 = 
    await wrapper.find('.button-container #plus').trigger('click')
    await wrapper.find('.button-container #zero').trigger('click')
    await wrapper.find('.button-container #dot').trigger('click')
    await wrapper.find('.button-container #five').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    // /3 = 
    await wrapper.find('.button-container #divide').trigger('click')
    await wrapper.find('.button-container #three').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    // +2 +/-
    await wrapper.find('.button-container #plus').trigger('click')
    await wrapper.find('.button-container #two').trigger('click')
    await wrapper.find('.button-container #reverse').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    // -5.1 = 
    await wrapper.find('.button-container #minus').trigger('click')
    await wrapper.find('.button-container #five').trigger('click')
    await wrapper.find('.button-container #dot').trigger('click')
    await wrapper.find('.button-container #one').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    expect(wrapper.find('.showBoard .text').text()).toEqual(no);
  });
  it("測試計算機 9292 * 3.24 / 63995 =", async () => {
    const no = "4.70481013";
    const wrapper = shallowMount(home);
    // 9292 * 3.24 = 
    await wrapper.find('.button-container #nine').trigger('click')
    await wrapper.find('.button-container #two').trigger('click')
    await wrapper.find('.button-container #nine').trigger('click')
    await wrapper.find('.button-container #two').trigger('click')
    await wrapper.find('.button-container #times').trigger('click')
    await wrapper.find('.button-container #three').trigger('click')
    await wrapper.find('.button-container #dot').trigger('click')
    await wrapper.find('.button-container #two').trigger('click')
    await wrapper.find('.button-container #four').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    // /63995 = 
    await wrapper.find('.button-container #divide').trigger('click')
    await wrapper.find('.button-container #six').trigger('click')
    await wrapper.find('.button-container #three').trigger('click')
    await wrapper.find('.button-container #nine').trigger('click')
    await wrapper.find('.button-container #nine').trigger('click')
    await wrapper.find('.button-container #equal').trigger('click')
    expect(wrapper.find('.showBoard .text').text()).toEqual(no);
  });
});
