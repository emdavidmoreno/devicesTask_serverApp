module.exports = app => {
  app.get('/api/', (req, res) => {
    res.json({
      response: 'Devices Api Works!'
    })
  })
}
