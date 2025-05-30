function main() {
  const lista = [10, 20, "string qualquer", 40, 50, 60];

  console.log("================");
  console.log("FOR");

  let temStringNoFor = false;
  for (let i = 0; i < lista.length; i++) {
    const item = lista[i];
    console.log("i ::>", i);
    console.log("item ::>", item);

    if (typeof item === "string") {
      console.log("achou string no for");
      temStringNoFor = true;
    }
  }

  console.log("");
  console.log("WHILE");

  let temStringNoWhile = false;
  let j = 0;
  while (j < lista.length) {
    const item = lista[j];
    console.log("j ::>", j);
    console.log("item ::>", item);

    if (typeof item === "string") {
      console.log("achou string no while");
      temStringNoWhile = true;
      j = j + lista.length;
    }
    j++;
  }
  console.log("===================");
}

main();
