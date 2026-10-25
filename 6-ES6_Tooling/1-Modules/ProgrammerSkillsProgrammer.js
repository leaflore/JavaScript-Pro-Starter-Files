import { setSkills, getSkills } from './ProgrammerSkills.js';

export class PSProgrammer {
    constructor(name, skills) {
        this.name = name;
        setSkills(this, skills);
        setSkills(this, skills);
    }

    code() {
        console.log(`${this.name} is coding in ${getSkills(this)}`);
    }

}

/**
 * Can use export default PSProgrammer to export it as the default export of the module.
 */