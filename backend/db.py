from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker,DeclarativeBase,Mapped,mapped_column
from config import config_obj

engine = create_engine(config_obj.DB_URL)
Session = sessionmaker(engine)

class Base(DeclarativeBase):
    pass

class ChatRequest(Base):
    __tablename__ = "chat_requests"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    ip_address: Mapped[str] = mapped_column(index=True)
    prompt: Mapped[str]
    response: Mapped[str]


def get_user_request(ip_address: str) -> list[ChatRequest]:
    with Session() as new_session:
        query = select(ChatRequest).filter_by(ip_address = ip_address)
        result = new_session.execute(query)
        return result.scalars().all()

def add_request_data(ip_address:str,prompt:str,response:str) -> None:
    with Session() as new_session:
        new_request = ChatRequest(ip_address=ip_address,prompt=prompt,response=response)
        new_session.add(new_request)
        new_session.commit()

# add resposnse to DB

def add_listing_request(
    ip_address: str,
    category: str,
    hint: str
) -> None:
    with Session() as new_session:
        request = ListingRequest(
            ip_address=ip_address,
            category=category,
            hint=hint,
            prompt=prompt,
            created_at=datetime.utcnow()
        )

        session.add(request)
        session.commit()
