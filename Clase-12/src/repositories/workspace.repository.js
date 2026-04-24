/* 
Crear el repository para manipular espacios de trabajo

- getAll() Obtiene toda la lista de espacios de trabajo activos (Recomendacion: Usen find en vez de findOne, ya que quieren obtener una lista de resultados)
- getById(workspace_id) Obtener un espacio de trabajo por su id
- deleteById(workspace_id) Eliminar un espacio de trabajo por su id (soft delete)
- updateById(workspace_id, update_data) Permite actualizar un espacio de trabajo por su ID
- create(nombre, descripcion) Permite crear un espacio de trabajo en la DB 
*/