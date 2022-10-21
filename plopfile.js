module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{name}}/{{pascalCase name}}.tsx",
                templateFile: "plop-templates/Component.tsx.hbs"
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{pascalCase name}}.styles.ts",
                templateFile: "plop-templates/Component.styles.ts.hbs"
            }
        ]
    });
};
