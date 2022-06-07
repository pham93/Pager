import { render } from '@testing-library/vue';
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = render(HelloWorld);
    expect(wrapper.getByText(/vue-loader/)).toBeVisible();
  });
});
