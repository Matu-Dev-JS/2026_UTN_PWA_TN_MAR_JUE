import WorkspaceMember from "../models/workspaceMembers.model.js"

class WorkspaceMemberRepository {

    /* Desarrollar los metodos */
    async create(user_id, workspace_id, rol) {
        return await WorkspaceMember.create({
            fk_workspace_id: workspace_id,
            fk_user_id: user_id,
            rol: rol
        })
    }

    async getById(member_id) {
        return await WorkspaceMember.findById(member_id)
    }

    async updateById(member_id, update_data) {
        return await WorkspaceMember.findByIdAndUpdate(member_id, update_data)
    }

    async deleteById(member_id) {
        return await WorkspaceMember.findByIdAndDelete(member_id)
    }

    /* HASTA AQUI */

    async getByWorkspaceId(workspace_id) {
        //Lista de membresias por x espacio de trabajo
        const result = await WorkspaceMember
            .find({fk_workspace_id: workspace_id})
            //Populate sirve para poder expandir una cierta propiedad
            //Cuando expandimos basicamente estamos trayendo los datos referenciados a esa propiedad
            //Solo podemos expandir las propiedades que en el modelo fueron marcadas como referencias
            .populate(
                'fk_user_id', 'nombre email'
            )

        const members_mapped = result.map(
            (member) => {
                return {
                    member_id: member._id,
                    member_fk_workspace_id: member.fk_workspace_id,
                    member_rol: member.rol,
                    member_fecha_creacion: member.fecha_creacion,
                    user_id: member.fk_user_id._id,
                    user_nombre: member.fk_user_id.nombre,
                    user_email: member.fk_user_id.email
                }
            }
        )
        return members_mapped
    }

    async getByUserId(user_id) {
        //Lista de membresias por x usuario, saber a que espacios de trabajo pertenece un usuario
    }

}

const workspaceMemberRepository = new WorkspaceMemberRepository()

export default workspaceMemberRepository