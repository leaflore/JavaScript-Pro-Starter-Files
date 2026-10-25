const programmerSkills = new WeakMap();

export function setSkills(programmer, skills) {
    programmerSkills.set(programmer, skills);
}

export function getSkills(programmer) {
    return programmerSkills.get(programmer);
}

// CommonJS export
// module.exports = { setSkills, getSkills };

// ES6 module export
// export { setSkills, getSkills };