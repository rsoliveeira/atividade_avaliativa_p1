export default class Product {
    constructor({ id, name, price, sku, description = '' }) {
      this.id = id ?? null; // id agora é opcional; será gerado automaticamente no controller (auto-increment lógico)
      this.name = name;
      this.price = Number(price);
      this.sku = String(sku).trim();
      this.description = description;
    }
  }
  