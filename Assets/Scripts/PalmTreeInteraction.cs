using System.Collections;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.LightTransport;

public class PalmTreeInteraction : MonoBehaviour
{
    [SerializeField] private float CoolDownTimer =30f;
    private  bool isCollided =false;
    [SerializeField] private PalmTreeInteractableEvent[] _palmTreeInteractable;
    //private float nextCollisonTime=0f;
    private Rigidbody2D rb;

    [SerializeField] private GameObject[] _pokemonsToSpawn;
    [SerializeField] private int _nmuberOfPokemons=3;
    [SerializeField,Range(0f,15f)] private float _pokemonOffset=3f;



    [SerializeField] private Rigidbody2D _seedsToSpawn;
    [SerializeField] private int _nmuberOfseeds=3;
    [SerializeField] private bool _delayBetweenSpawn=false;
    [SerializeField] private float _explosionForce=10f;
    [SerializeField,Range(0f,0.5f)] private float _explosionArc=0.5f;
    [SerializeField] private Transform _spawnTransforms;


    void Awake()
    {
        rb=GetComponent<Rigidbody2D>();
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if ( !isCollided &collision.gameObject.CompareTag("PalmTrees"))
        {       
                isCollided=true;
                Debug.Log("Player Bumped into Palm Zone");
                StartCoroutine(ResetCooldDownTimer());
                DeterminePlamSpawnObjects();
            
        }
    }
    private IEnumerator ResetCooldDownTimer()
    {
        yield return new WaitForSeconds(CoolDownTimer);
        isCollided=false;
    }
    private void DeterminePlamSpawnObjects()
    {
        float totalChance =0f;
        foreach(PalmTreeInteractableEvent interactableEvent in _palmTreeInteractable)
        {
            totalChance+=interactableEvent.SpawnChance;
        }
        float rand= Random.Range(0f,totalChance);
        float cumilativeChance=0f;
        foreach(PalmTreeInteractableEvent interactableEvent in _palmTreeInteractable)
        {
            cumilativeChance+=interactableEvent.SpawnChance;
            if(rand <=cumilativeChance)
            {
                interactableEvent.PalmTreeSpawnEvents.Invoke();
                return;
            }
        } 
    }
    public void SpawnPokemon()
    {
        Debug.Log("Spawinig pokemon");
    }
    public void SpawnNothing()
    {
        Debug.Log("Better Luck Next Time");
    }
    public void SpawnSeeds()
    {
        if (!_delayBetweenSpawn)
        {
            for(int i=0; i < _nmuberOfseeds; i++)
            { 
                Rigidbody2D seedRB=Instantiate(_seedsToSpawn,_spawnTransforms.position, Quaternion.identity);
                Explosion(seedRB);
            }
        }
        else
        {
            StartCoroutine(SpawnCoinsWithCoroutine());
        }
    }
    private IEnumerator SpawnCoinsWithCoroutine()
    {
        for(int i=0; i < _nmuberOfseeds; i++)
        { 
            Rigidbody2D seedRB=Instantiate(_seedsToSpawn,_spawnTransforms.position, Quaternion.identity);
            Explosion(seedRB);
            yield return null;
        }  
    }
    private void Explosion(Rigidbody2D rb)
    {
        Vector2 randDir=new Vector2(Random.Range(-_explosionArc,_explosionArc),1f);
        Vector2 force=randDir.normalized*_explosionForce;
        rb.AddForce(force,ForceMode2D.Impulse);
    }
}
[System.Serializable]
public class PalmTreeInteractableEvent
{
    public string EventName;
    [Space]
    [Space]
    [Range(0f,1f)] public float SpawnChance=0.5f;
    public UnityEvent PalmTreeSpawnEvents;
}
