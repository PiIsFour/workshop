interface ShipmentMeasurements {
	maxSingleWeight: number;
	sumWeight: number;
	numItems: number;
}

export interface ShippingProvider {
	calculateCost(shipment: ShipmentMeasurements): number
}
