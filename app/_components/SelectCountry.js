// // import { getCountries } from "@/app/_lib/data-service";

// // Let's imagine your colleague already built this component 😃

// export default async function SelectCountry({
//   defaultCountry,
//   name,
//   id,
//   className,
// }) {
//   const countries = await getCountries();
//   const flag =
//     countries.find((country) => country.name === defaultCountry)?.flag ?? "";

//   return (
//     <select
//       name={name}
//       id={id}
//       // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
//       defaultValue={`${defaultCountry}%${flag}`}
//       className={className}
//     >
//       <option value="">Select country...</option>
//       {countries.map((c) => (
//         <option key={c.name} value={`${c.name}%${c.flag}`}>
//           {c.name}
//         </option>
//       ))}
//     </select>
//   );
// }

export default function SelectCountry({ defaultCountry, name, id, className }) {
  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultCountry}
      className={className}
    >
      <option value="">Select country...</option>
      {/* This is a placeholder. In a real app, you would map over an array of countries */}
      <option value="portugal">Portugal</option>
      <option value="spain">Spain</option>
      <option value="france">France</option>
    </select>
  );
}
