// export type ProductGroupId = "fuels" | "industrial" | "specialty";
// export type ProductId =
//   | "fuelA" | "fuelB" | "fuelC"
//   | "industrialA" | "industrialB" | "industrialC"
//   | "specialtyA" | "specialtyB" | "specialtyC";

// /**
//  * Deliberately generic placeholder product line-up — a structural example
//  * for buyers to replace with their own real, verified product names and
//  * specification sheets. Icons only; translated names/descriptions live in
//  * each dictionary's `products.items`.
//  */
// export const productGroups: { id: ProductGroupId; icon: string; items: ProductId[] }[] = [
//   { id: "fuels", icon: "Flame", items: ["fuelA", "fuelB", "fuelC"] },
//   { id: "industrial", icon: "Factory", items: ["industrialA", "industrialB", "industrialC"] },
//   { id: "specialty", icon: "Beaker", items: ["specialtyA", "specialtyB", "specialtyC"] },
// ];

// export const productIcons: Record<ProductId, string> = {
//   fuelA: "Droplet",
//   fuelB: "Fuel",
//   fuelC: "Gauge",
//   industrialA: "Package",
//   industrialB: "Boxes",
//   industrialC: "Layers",
//   specialtyA: "FlaskConical",
//   specialtyB: "TestTube",
//   specialtyC: "Sparkles",
// };











// export type ProductGroupId = "fuels";

// export type ProductId =
//   | "jetFuel"
//   | "baseOil"
//   | "espoCrudeOil"
//   | "lightCycleOil"
//   | "petroleumCoke"
//   | "automotiveGasOil"
//   | "lng"
//   | "lpg"
//   | "fuelOil"
//   | "mazut"
//   | "bitumen"
//   | "urea"
//   | "naphtha";

// /**
//  * Fuel product line-up.
//  * Icons only; translated names/descriptions live in
//  * each dictionary's `products.items`.
//  */
// export const productGroups: {
//   id: ProductGroupId;
//   icon: string;
//   items: ProductId[];
// }[] = [
//   {
//     id: "fuels",
//     icon: "Flame",
//     items: [
//       "jetFuel",
//       "baseOil",
//       "espoCrudeOil",
//       "lightCycleOil",
//       "petroleumCoke",
//       "automotiveGasOil",
//       "lng",
//       "lpg",
//       "fuelOil",
//       "mazut",
//       "bitumen",
//       "urea",
//       "naphtha",
//     ],
//   },
// ];

// export const productIcons: Record<ProductId, string> = {
//   jetFuel: "Plane",
//   baseOil: "Droplet",
//   espoCrudeOil: "Waves",
//   lightCycleOil: "Fuel",
//   petroleumCoke: "Package",
//   automotiveGasOil: "Gauge",
//   lng: "Snowflake",
//   lpg: "Flame",
//   fuelOil: "Fuel",
//   mazut: "Factory",
//   bitumen: "Layers",
//   urea: "FlaskConical",
//   naphtha: "Beaker",
// };





export type ProductGroupId = "fuels";

export type ProductId =
  | "jetFuel"
  | "baseOil"
  | "espoCrudeOil"
  | "lightCycleOil"
  | "petroleumCoke"
  | "automotiveGasOil"
  | "lng"
  | "lpg"
  | "fuelOil"
  | "mazut"
  | "bitumen"
  | "urea"
  | "naphtha";

export type Product = {
  id: ProductId;
  name: string;
  description: string;
  icon: string;
};

export type ProductGroup = {
  id: ProductGroupId;
  name: string;
  description: string;
  icon: string;
  items: Product[];
};

export const productGroups: ProductGroup[] = [
  {
    id: "fuels",
    name: "Fuels",
    description:
      "Petroleum, energy, and industrial products sourced for commercial and industrial applications.",
    icon: "Flame",
    items: [
      {
        id: "jetFuel",
        name: "Jet Fuel",
        description:
          "Aviation fuel supplied for commercial and industrial aviation requirements.",
        icon: "Plane",
      },
      {
        id: "baseOil",
        name: "Base Oil",
        description:
          "Base oils supplied for lubricant manufacturing and industrial applications.",
        icon: "Droplet",
      },
      {
        id: "espoCrudeOil",
        name: "ESPO Crude Oil",
        description:
          "ESPO crude oil supplied for refining, processing, and energy-sector applications.",
        icon: "Waves",
      },
      {
        id: "lightCycleOil",
        name: "Light Cycle Oil",
        description:
          "Light cycle oil supplied for refinery, blending, and industrial applications.",
        icon: "Fuel",
      },
      {
        id: "petroleumCoke",
        name: "Petroleum Coke",
        description:
          "Petroleum coke supplied for industrial, manufacturing, and energy applications.",
        icon: "Package",
      },
      {
        id: "automotiveGasOil",
        name: "Automotive Gas Oil (AGO)",
        description:
          "Automotive gas oil supplied for diesel-powered vehicles, equipment, and industrial applications.",
        icon: "Gauge",
      },
      {
        id: "lng",
        name: "LNG",
        description:
          "Liquefied natural gas supplied for energy, industrial, and commercial applications.",
        icon: "Snowflake",
      },
      {
        id: "lpg",
        name: "LPG",
        description:
          "Liquefied petroleum gas supplied for energy, commercial, and industrial applications.",
        icon: "Flame",
      },
      {
        id: "fuelOil",
        name: "Fuel Oil",
        description:
          "Fuel oil supplied for industrial heating, power generation, and energy applications.",
        icon: "Fuel",
      },
      {
        id: "mazut",
        name: "Mazut",
        description:
          "Heavy fuel oil supplied for industrial and energy applications.",
        icon: "Factory",
      },
      {
        id: "bitumen",
        name: "Bitumen",
        description:
          "Bitumen supplied for road construction, infrastructure, and industrial applications.",
        icon: "Layers",
      },
      {
        id: "urea",
        name: "Urea",
        description:
          "Urea supplied for agricultural and industrial applications.",
        icon: "FlaskConical",
      },
      {
        id: "naphtha",
        name: "Naphtha",
        description:
          "Naphtha supplied for refining, petrochemical, and industrial applications.",
        icon: "Beaker",
      },
    ],
  },
];
