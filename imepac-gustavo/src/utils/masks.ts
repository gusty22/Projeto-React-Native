export const maskCEP = (value: string) => {
    return value
        .replace(/\D/g, "") // Remove tudo o que não é dígito
        .replace(/^(\d{5})(\d)/, "$1-$2") // Coloca hífen entre o quinto e o sexto dígito
        .slice(0, 9); // Limita o tamanho a 9 caracteres (00000-000)
};

export const maskPhone = (value: string) => {
    let v = value.replace(/\D/g, "");
    if (v.length <= 10) {
        return v.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3").slice(0, 15);
};

export const maskDate = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 10);
};

export const maskTime = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1:$2")
        .slice(0, 5);
};