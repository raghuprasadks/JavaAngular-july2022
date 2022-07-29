package demo;

public class Doctor implements Staff{
    private int id;
    private String qualification;

    private Nurse nurse;
    public Doctor (int id,String qualification){
        this.id = id;
        this.qualification=qualification;
    }

    public void assist(){
        System.out.println("Doctor is assisting");
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Nurse getNurse() {
        return nurse;
    }

    public void setNurse(Nurse nurse) {
        this.nurse = nurse;
    }
}
