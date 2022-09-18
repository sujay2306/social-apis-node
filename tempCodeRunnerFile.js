const swaggerDocument = YAML.load('./swagger.yml');
//app.use is a middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));