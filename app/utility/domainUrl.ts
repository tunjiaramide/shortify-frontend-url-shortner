const modifyUrl = (domain: string): string => {
    const extractCode = domain.split("/")[3]; 
    const fullOrigin = window.location.origin; 
    return `${fullOrigin}/${extractCode}`;
};

export default modifyUrl;