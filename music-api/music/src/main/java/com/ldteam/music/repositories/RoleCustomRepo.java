package com.ldteam.music.repositories;

import com.ldteam.music.entities.Role;
import com.ldteam.music.entities.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.hibernate.Session;
import org.hibernate.query.NativeQuery;
import org.hibernate.transform.Transformers;
import org.hibernate.type.StandardBasicTypes;
import org.springframework.stereotype.Repository;

import javax.xml.transform.Transformer;
import java.util.List;

@Repository

public class RoleCustomRepo {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Role> getRole(User user) {
        StringBuilder sql = new StringBuilder()
                .append("select r.name as name from users u join users_role ur on u.id = ur.users_id\n" +
                        "join roles r on r.id = ur.roles_id ");
        sql.append("where 1=1 "); // Điều kiện để bắt đầu câu truy vấn

        // Thêm điều kiện lọc theo ID của người dùng nếu đã được truyền vào
        if (user.getId() != null) {
            sql.append("and u.id = :userId ");
        }

        NativeQuery<Role> query = ((Session) entityManager.getDelegate()).createNativeQuery(sql.toString());

        // Nếu có ID của người dùng được truyền vào, thiết lập tham số userId
        if (user.getId() != null) {
            query.setParameter("userId", user.getId());
        }

        query.addScalar("name", StandardBasicTypes.STRING);
        query.setResultTransformer(Transformers.aliasToBean(Role.class));
        return query.list();
    }

}
