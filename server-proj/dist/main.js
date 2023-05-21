"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env = process.env.NODE_ENV || 'development';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map