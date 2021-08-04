import { getDevices, addDevice, getDevice, updateDevice, deleteDevice } from '../controllers/devices'

module.exports = app => {
  app.route('/api/devices')
    .get(getDevices)
    .post(addDevice)

  app.route('api/devices/:id')
    .get(getDevice)
    .put(updateDevice)
    .delete(deleteDevice)
}