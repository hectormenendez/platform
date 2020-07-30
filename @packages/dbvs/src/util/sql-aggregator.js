const  { AGGREGATOR_PUSH, AGGREGATOR_QUEUE } = require("../config");
const Tools = require("./sql-tools");

const { get } = Tools;

module.exports = class Aggregator {
    #statements = [];
    #queue = [];
    #get = (content = []) => `${get.content(content)};`;

    constructor(generator) {
        // Bind all properties (and their respective submembers)
        // with this instance so the output can be generated.
        const tools = Object.keys(Tools).reduce((result, key) => {
            const tool = Object.entries(Tools[key]).reduce(
                (acc, [propKey, prop]) => ({
                    ...acc,
                    [propKey]: typeof prop !== "function" ? prop : prop.bind(this),
                }),
                {},
            );
            this[key] = tool;
            return { ...result, [key]: tool };
        }, {});
        // generate the output
        generator(tools);
        // eslint-disable-next-line no-new-wrappers, no-constructor-return
        return this.#statements;
    }

    [AGGREGATOR_PUSH](content) {
        this.#statements.push(this.#get(content));
        while (this.#queue.length) {
            this.#statements.push(this.#queue.shift());
        }
    }

    [AGGREGATOR_QUEUE](content) {
        this.#queue.push(this.#get(content));
    }

};
