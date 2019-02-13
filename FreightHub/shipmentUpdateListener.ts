import ShipmentSearchIndex from './shipmentSearchIndex';

interface ShipmentUpdateListenerInterface {
  receiveUpdate(id: string, shipmentData: any) 
}

class ShipmentUpdateListener extends ShipmentSearchIndex implements ShipmentUpdateListenerInterface {
  async receiveUpdate(id: string, shipmentData: any) {
    await this.updateShipment(id, shipmentData)
  }
}

