import {defineRule} from "vee-validate";
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
    Object.keys(rules)
        .filter(rule => rule !== 'default')
        .forEach(rule => {
            defineRule(rule,
                rules[rule]);
            console.log(`Registered rule ${rule}`);
        });

})
