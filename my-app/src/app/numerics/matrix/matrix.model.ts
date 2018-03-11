export class Matrix {

    M11: number;
    M12: number;
    M13: number;
    M14: number;
    M21: number;
    M22: number;
    M23: number;
    M24: number;
    M31: number;
    M32: number;
    M33: number;
    M34: number;
    M41: number;
    M42: number;
    M43: number;
    M44: number;


    constructor(m11: number, m12: number, m13: number, m14: number,
        m21: number, m22: number, m23: number, m24: number,
        m31: number, m32: number, m33: number, m34: number,
        m41: number, m42: number, m43: number, m44: number) {
        this.M11 = m11;
        this.M12 = m12;
        this.M13 = m13;
        this.M14 = m14;
        this.M21 = m21;
        this.M22 = m22;
        this.M23 = m23;
        this.M24 = m24;
        this.M31 = m31;
        this.M32 = m32;
        this.M33 = m33;
        this.M34 = m34;
        this.M41 = m41;
        this.M42 = m42;
        this.M43 = m43;
        this.M44 = m44;
    }
}
